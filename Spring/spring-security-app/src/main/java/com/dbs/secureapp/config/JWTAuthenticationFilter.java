package com.dbs.secureapp.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.filter.OncePerRequestFilter;

import com.dbs.secureapp.entities.User;

public class JWTAuthenticationFilter extends OncePerRequestFilter {
	
	
	private UserDetailsService userDetailsService;
	private JWTTokenHelper jwtTokenHelper;
	
	public JWTAuthenticationFilter(
			UserDetailsService userDetailsService, 
			JWTTokenHelper jwtTokenHelper) {
		
		this.userDetailsService = userDetailsService;
		this.jwtTokenHelper = jwtTokenHelper;
		
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		//enable for testing with postman
		//String authToken = jwtTokenHelper.getAuthHeaderFromHeader(request);
		
		//Enable for client
		String authToken = jwtTokenHelper.getToken(request);
		
		if(null != authToken) {
			String userName = jwtTokenHelper.getUsernameFromToken(authToken);
			
			if(null != userName) {
				UserDetails userDetails = userDetailsService.loadUserByUsername(userName);
				
				if(jwtTokenHelper.validateToken(authToken, userDetails)) {
					UsernamePasswordAuthenticationToken authentication = 
							new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
					
					authentication.setDetails(request);
					
					SecurityContextHolder.getContext().setAuthentication(authentication);
				}
			}
		}
		
		filterChain.doFilter(request, response);
		
	}

}
