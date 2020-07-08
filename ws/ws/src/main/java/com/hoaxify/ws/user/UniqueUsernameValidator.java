package com.hoaxify.ws.user;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

public class UniqueUsernameValidator implements ConstraintValidator<UniqueUsername, String> {

	@Autowired
	UserRepository UserRepository;
	
	@Override
	public boolean isValid(String username, ConstraintValidatorContext context) {
	User user =	UserRepository.findByUsername(username);
	if(user!=null) {
		return false;
	}	
	return true;
	}

}
