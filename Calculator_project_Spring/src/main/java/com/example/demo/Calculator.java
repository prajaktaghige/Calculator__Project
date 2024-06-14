package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin
@RestController
public class Calculator {
	@RequestMapping("add{num1}and{num2}")
	public int add(@PathVariable int num1, @PathVariable int num2) {
		int result=num1+num2;
		return result;
	}
	
	@RequestMapping("sub{num1}and{num2}")
	public int sub(@PathVariable int num1, @PathVariable int num2) {
		int result=num1-num2;
		return result;
	}
	
	@RequestMapping("mult{num1}and{num2}")
	public int mult(@PathVariable int num1, @PathVariable int num2) {
		int result=num1*num2;
		return result;
	}
	
	@RequestMapping("div{num1}and{num2}")
	public int div(@PathVariable int num1, @PathVariable int num2) {
		int result=num1/num2;
		return result;
	}
	
	@RequestMapping("mod{num1}and{num2}")
	public int mod(@PathVariable int num1, @PathVariable int num2) {
		int result=num1%num2;
		return result;
	}
}