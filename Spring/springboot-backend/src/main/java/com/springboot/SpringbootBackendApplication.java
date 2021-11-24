package com.springboot;

import com.springboot.model.Employee;
import com.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;


	@Override
	public void run(String... args) throws Exception {
//			Employee employee = new Employee();
//			employee.setFirstName("Bvs");
//			employee.setLastName("Rao");
//			employee.setEmailId("bvsrao@gmail.com");
//			employeeRepository.save(employee);
//
//			Employee employee1 = new Employee();
//			employee1.setFirstName("Krishna");
//			employee1.setLastName("Teja");
//			employee1.setEmailId("krishna@gmail.com");
//			employeeRepository.save(employee1);
	}
}
