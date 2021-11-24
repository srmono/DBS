package com.dbs.springdatajpa.repository;

import static org.junit.jupiter.api.Assertions.*;

import com.dbs.springdatajpa.entity.Guardian;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.dbs.springdatajpa.entity.Student;

import java.util.List;

@SpringBootTest
class StudentRepositoryTest {

	@Autowired
	private StudentRepository studentRepository;
	
	@Test
	public void saveStudent() {

		Student student = Student.builder()
					.emailId("bvsrao91@gmail.com")
					.firstName("bvs")
					.lastName("rao")
//					.guardianName("venkat")
//					.guardianEmail("venkat@gmail.com")
//					.guardianMobile("99999999")
					.build();

		studentRepository.save(student);
	}

	@Test
	public void printAllStudents(){
		List<Student> studentList = studentRepository.findAll();

		System.out.println("Student List = " + studentList);
	}

	@Test
	public void  saveEmbeddedGuardian(){

		Guardian guardian = Guardian.builder()
				.name("venkat")
				.email("venkat@gmail.com")
				.mobile("99999999")
				.build();

		Student student = Student.builder()
				.emailId("bvsrao92@gmail.com")
				.firstName("Dbanush")
				.lastName("pattela")
				.guardian(guardian)
				.build();

		studentRepository.save(student);
	}

	@Test
	public  void getByFname(){
		List<Student> students =
				studentRepository.findByFirstName("Dbanush");

		System.out.println(students);
	}

}
