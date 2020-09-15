package com.example.demo.rest;

//realizador por: Fredy Vásquez M5A

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	@PostMapping
	@CrossOrigin
	public ResponseEntity savePersona(@RequestBody Persona persona) {
		personaS.crearPersona(persona);
		return ResponseEntity.ok("OK");
	}
	
	
	@GetMapping(path = "/list", produces = "application/json")
	public List<Persona> listarPersona(){
		return personaS.listarPersona();
	}
	
	// Tarea 1-2
	@GetMapping(path = "/list/persona", produces = "application/json")
	public List<Persona> listPersonaByNA(@RequestParam String nom, String apell){
		return personaS.personaBYnombreyAapellido(nom, apell);
	}
	@GetMapping(path = "/list/edad", produces = "application/json")
	public List<Persona> listarPersonaEdad(){
		return personaS.listarPersonaconEDAD();
	}
	@GetMapping(path = "/list/persona-edad", produces = "application/json")
	public List<Persona> listPersonaByNE(@RequestParam String nom, int ed){
		return personaS.personaBYnombreyedad(nom, ed);
	}
	
	@GetMapping(path = "/list/persona_correo", produces = "application/json")
	public List<Persona> listPersonaByEmail(@RequestParam String emeil){
		return personaS.personaBYcorreo(emeil);
	}
	
	@GetMapping(path = "/list/consulta", produces = "application/json")
	public List<Persona> cunsulta5(){
		return personaS.consulta();
	}

	// Tarea 3
	
	@GetMapping(path = "/list/nombre", produces = "application/json")
	public List<Persona> buscarNom(String nombre){
		return personaS.buscarNombre(nombre);
	}
	@GetMapping(path = "/list/nombreletra", produces = "application/json")
	public List<Persona> buscarLetraNombre(String nombre){
		return personaS.buscarNombreLetra(nombre);
	}
	@GetMapping(path = "/list/apellidoletra", produces = "application/json")
	public List<Persona> buscarLetraApellido(String apellido){
		return personaS.buscarApellLetra(apellido);
	}
	@GetMapping(path = "/list/apellido-nombre", produces = "application/json")
	public List<Persona> buscarApellidoONombre(String apellido,String nombre){
		return personaS.buscarAppOrNom(apellido, nombre);
	}
	@GetMapping(path = "/list/emailDominio", produces = "application/json")
	public List<Persona> buscarApellidoONombre(String dominio){
		return personaS.buscarEmailDominio(dominio);
	}
	@GetMapping(path = "/list/edadMayor", produces = "application/json")
	public List<Persona> buscarMayorEdad(int edad){
		return personaS.buscarEdad1(edad);
	}
	@GetMapping(path = "/list/edadMayorOigual", produces = "application/json")
	public List<Persona> buscarMayorOIgualEdad(int edad){
		return personaS.buscarEdad2(edad);
	}
	@GetMapping(path = "/list/edadMenor", produces = "application/json")
	public List<Persona> buscarMenorEdad(int edad){
		return personaS.buscarEdad3(edad);
	}
	@GetMapping(path = "/list/edadMenorOigual", produces = "application/json")
	public List<Persona> buscarMenorOIgualEdad(int edad){
		return personaS.buscarEdad4(edad);
	}
	
	@GetMapping(path = "/list/edad2", produces = "application/json")
	public Persona buscarPorEdad(){
		return personaS.buscarEdad5();
	}
	
	// Uso del DTO
	@GetMapping(path = "/nombre/{cedula}")
	public PersonaDTO buscarNombrePorCedula(@PathVariable String cedula) {
		return personaS.nombreCompleto(cedula);
	}
	
	@GetMapping(path = "/idmax", produces = "application/json")
	public Persona personaIDMax(){
		return personaS.personaIDMax();
	}
	
}
