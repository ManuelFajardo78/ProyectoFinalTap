package com.example.demo.service;

import com.example.demo.model.Login;
import com.example.demo.repository.LoginRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    @Autowired
	private LoginRepository loginR;
	
	public Login crearLogin(Login log) {
		return loginR.save(log);
	}
	
	public List<Login> listarLogin(){
		return loginR.findAll();
	}
    
}
