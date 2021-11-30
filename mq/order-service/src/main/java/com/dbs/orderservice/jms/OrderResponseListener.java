package com.dbs.orderservice.jms;

import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.TextMessage;

import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class OrderResponseListener {
	
	@JmsListener(destination = "ORDER.RESPONSE")
	public void receive(Message message) throws JMSException {
		TextMessage textMessage = (TextMessage) message;
		log.info("### 4 ### Order Service Received Message Response: {} with correlation id: {}",
				textMessage.getText(), textMessage.getJMSCorrelationID());
		
		// Add logic to update order in the database
	}
}
