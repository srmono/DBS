package com.dbs.orderservice;

import java.nio.charset.StandardCharsets;

import javax.jms.JMSException;
import javax.jms.TextMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.orderservice.model.OrderRequest;
import com.ibm.mq.jms.MQQueue;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("orders")
public class OrderController {
	
	@Autowired
	private JmsTemplate jmsTemplate;
	
	@PostMapping
	public ResponseEntity<String> createOrder(@RequestBody OrderRequest order) throws JMSException {
		log.info("#### 1 #### Order service Sending order message '{}' to the queue", order.getMessage());
		
		MQQueue orderRquestQueue = new MQQueue("ORDER.REQUEST"); 
		
		jmsTemplate.convertAndSend(orderRquestQueue, order.getMessage(), textMessage -> {
			textMessage.setJMSCorrelationID(order.getIdentifier());
			return textMessage;
		});
		
		return new ResponseEntity(order, HttpStatus.ACCEPTED);	
	}
	
	//End point for find order form "ORDER.REQUEST" queue by corerleation_id/identifier
	@GetMapping
	public ResponseEntity<OrderRequest> findOrderByCorrelationId(@RequestParam String correlationId) throws JMSException {
		log.info("Lokking for message '{}'",correlationId);
		
		String convertedId = bytesToHex(correlationId.getBytes());
		
		final String selectorExpression = String.format( "JMSCorrelationID='ID:%s'", convertedId);
		final TextMessage responseMessage = (TextMessage) jmsTemplate.receiveSelected("ORDER.REQUEST", selectorExpression);
		
		OrderRequest response = OrderRequest.builder()
				.message(responseMessage.getText())
				.identifier(correlationId)
				.build();
		
		return new ResponseEntity(response, HttpStatus.OK);
	}
	
	// You could use Apache Commons Codec library instead
    private static final byte[] HEX_ARRAY = "0123456789ABCDEF".getBytes();
    public static String bytesToHex(byte[] bytes) {
        byte[] hexChars = new byte[bytes.length * 2];
        for (int j = 0; j < bytes.length; j++) {
            int v = bytes[j] & 0xFF;
            hexChars[j * 2] = HEX_ARRAY[v >>> 4];
            hexChars[j * 2 + 1] = HEX_ARRAY[v & 0x0F];
        }
        return new String(hexChars, StandardCharsets.UTF_8);
    }
}
















