package com.example.demo.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.PersonaDTO;
import com.example.demo.model.Persona;
import com.example.demo.service.PersonaService;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping()
public class PersonaControl {
	@Autowired
	PersonaService personaS;
	@PostMapping(path = "/guardarpers")
	@CrossOrigin
	public ResponseEntity savePersona(@RequestBody Persona persona) {
		personaS.crearPersona(persona);
		return ResponseEntity.ok("OK");
	}
	
	
	@GetMapping(path = "/listpers", produces = "application/json")
	public List<Persona> listarPersona(){
		return personaS.listarPersona();
	}
	
	// Uso del DTO
	@GetMapping(path = "/nombre/{cedula}")
	public PersonaDTO buscarNombrePorCedula(@PathVariable String cedula) {
		return personaS.nombreCompleto(cedula);
	}
}
