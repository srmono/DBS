package com.dbs.secureapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.dbs.secureapp.entities.User;
import com.dbs.secureapp.repositories.UserDetailsRepository;

@Service
public class CustomUserService implements UserDetailsService {
	
	@Autowired
	UserDetailsRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		User user = userRepository.findByUserName(username);
		
		if(null == user) {
			throw new UsernameNotFoundException("User Not Found with username: " + username);
		}
		
		return user;
	}

}
