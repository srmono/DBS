package com.springcore.lifecycle;

public class Product {
	private double price;

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		System.out.println(" Setting Price ");
		this.price = price;
	}

	public Product(double price) {
		super();
		this.price = price;
	}

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Product [price=" + price + "]";
	}
	
	public void init() {
		System.out.println("Inisde init method");
	}
	
	public void destroy() {
		System.out.println("Inside destroy method");
	}
}













