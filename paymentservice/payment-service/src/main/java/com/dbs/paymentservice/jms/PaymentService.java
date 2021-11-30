package com.dbs.paymentservice.jms;

import java.util.Random;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.TextMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

import com.ibm.mq.jms.MQQueue; 

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class PaymentService {
	
	@Autowired
	private JmsTemplate jmsTemplate;
	
	@JmsListener(destination = "ORDER.REQUEST")
	public void receive(Message message) throws JMSException {
		//Receive Message 
		TextMessage textMessage = (TextMessage) message;
		final String textMessageBody = textMessage.getText();
		log.info("### 2 ### Payment service recieved message: {} with correlationId: {} ", 
				textMessageBody, textMessage.getJMSCorrelationID());
		
		//write logic to check payment status (success/fail)
		// Logic to completed the order (80% times true)
		Random random = new Random();
		String orderCompleted = (random.nextInt(101) >= 20) ? "payment_ok" : "payment_failed";
		
		// Send Response
		log.info("### 3 ### Payment Service Sending Response");
		
		MQQueue orderRequestQueue = new MQQueue("ORDER.RESPONSE");
		jmsTemplate.convertAndSend(orderRequestQueue, orderCompleted, responseMessage -> {
			responseMessage.setJMSCorrelationID(textMessage.getJMSCorrelationID());
			return responseMessage;
		});
		
		
	}
	

}
