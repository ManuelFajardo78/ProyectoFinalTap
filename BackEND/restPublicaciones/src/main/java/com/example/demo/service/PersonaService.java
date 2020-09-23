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
	// uso de DTO
	
	public PersonaDTO nombreCompleto(String ced) {
		Persona persona = personaR.findByCedula(ced);
		PersonaDTO nombreDTO = new PersonaDTO();
		nombreDTO.setNombreCompleto(persona.getNombre()+" "+persona.getApellido());
		return nombreDTO;
	}
	
}
