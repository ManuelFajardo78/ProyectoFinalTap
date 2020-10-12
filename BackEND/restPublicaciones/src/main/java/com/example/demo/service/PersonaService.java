package com.example.demo.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.PersonaDTO;
import com.example.demo.model.Persona;
import com.example.demo.repository.PersonaRepository;

@Service
public class PersonaService {
	@Autowired
	private PersonaRepository personaR;
	
	public Persona crearPersona(Persona per) {
		return personaR.save(per);
	}
	
	public List<Persona> listarPersona(){
		return personaR.findAll();
	}
	
	public Persona personaBY(String ced) {
		return personaR.findByCedula(ced);
	}
	
}
