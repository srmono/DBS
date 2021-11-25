package com.dbs.secureapp;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.dbs.secureapp.entities.Authority;
import com.dbs.secureapp.entities.User;
import com.dbs.secureapp.repositories.UserDetailsRepository;

@SpringBootApplication
public class SpringSecurityAppApplication {
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private UserDetailsRepository userDetailsRepository;

	public static void main(String[] args) {
		SpringApplication.run(SpringSecurityAppApplication.class, args);
	}
	
	@PostConstruct
	protected void init() {
		List<Authority> authorityList = new ArrayList<>();
		
		authorityList.add(createAuthority("USER", "User Role"));
		authorityList.add(createAuthority("ADMIN", "Admin Role"));
		
		User user = new User();
		user.setUserName("venkat");
		user.setFirstName("venkat"); 
		user.setLastName("B");
		
		user.setPassword(passwordEncoder.encode("venkat$123"));
		user.setEnabled(true);
		user.setAuthorities(authorityList);
		
		userDetailsRepository.save(user);
	}

	private Authority createAuthority(String roleCode, String roleDescription) {
		Authority authority = new Authority();
		
		authority.setRoleCode(roleCode);
		authority.setRoleDescription(roleDescription);
		
		return authority;
	}
}
