/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.service;

import com.example.demo.model.UserIngreso;
import com.example.demo.repository.UserIngresoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserIngresoService {
    @Autowired
	private UserIngresoRepository userIngresoR;
	
	public UserIngreso crearUser(UserIngreso usuario) {
		return userIngresoR.save(usuario);
	}
	
	public List<UserIngreso> listarUser(){
		return userIngresoR.findAll();
	}
	
	public UserIngreso actUser(String username, int id) {
		UserIngreso  userIngreso = new UserIngreso();
		userIngreso.setId(id);
		userIngreso.setUsuario(username);
		userIngresoR.deleteById(id);
		return userIngresoR.save(userIngreso);
	}
}
