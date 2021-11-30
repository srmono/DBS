package com.jboss;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class SpringJboss1Application extends SpringBootServletInitializer {
	
	

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		// TODO Auto-generated method stub
		//return super.configure(builder);
		return builder.sources(SpringJboss1Application.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(SpringJboss1Application.class, args);
	}
	
	@RequestMapping("/hello")
	public String helloWorld() {
		return "Hello World";
	}

}
