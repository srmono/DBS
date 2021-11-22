package com.springcore.ci;

public class Person {
	private String name;
	private int personId;
	private Certificate certificate;

	public Person(String name, int personId, Certificate certificate) {
		// super();
		this.name = name;
		this.personId = personId;
		this.certificate = certificate;
	}

	@Override
	public String toString() {
		return this.name + " : " + this.personId + " { " + this.certificate.name + " } ";
	}

}
