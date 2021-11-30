package com.jboss;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

	@RequestMapping("/hello")
	public String sayHello() {
		return "Hey I am in JBOSS";
	}

}
