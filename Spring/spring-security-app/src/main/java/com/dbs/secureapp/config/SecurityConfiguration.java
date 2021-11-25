package com.dbs.secureapp.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.dbs.secureapp.services.CustomUserService;


@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends  WebSecurityConfigurerAdapter{
	
	@Autowired
	private CustomUserService userService;

//	@Override
//	protected AuthenticationManager authenticationManager() throws Exception {
//		// TODO Auto-generated method stub
//		return super.authenticationManager();
//	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		
		//In Memory Authentication
		auth
			.inMemoryAuthentication()
			.withUser("venkat")
			.password(passwordEncoder().encode("test$1234"))
			.authorities("USER", "ADMIN");
		
		// Database Authentication
		auth
			.userDetailsService(userService)
			.passwordEncoder(passwordEncoder());
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		//http.authorizeRequests().anyRequest().permitAll();
		
		//http.authorizeRequests().anyRequest().authenticated();
		
		http.authorizeRequests(
				(request) ->request.antMatchers("/h2-console/**")
					.permitAll()
					.anyRequest()
					.authenticated()
				);
		
		http.formLogin();
		//http.httpBasic();
		
		//h2-console
		http.csrf().disable().headers().frameOptions().disable();
		
		
	}
	
	
}
