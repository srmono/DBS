package com.springcore.lifecycle;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		
//		ApplicationContext context = new ClassPathXmlApplicationContext("com/springcore/lifecycle/config.xml");
		AbstractApplicationContext context = new ClassPathXmlApplicationContext("com/springcore/lifecycle/config.xml");
		
		Product prod1 = (Product) context.getBean("p1");
		
		System.out.println(prod1);
		
		// Registering Shutdown Hook
		context.registerShutdownHook();
	}
}

