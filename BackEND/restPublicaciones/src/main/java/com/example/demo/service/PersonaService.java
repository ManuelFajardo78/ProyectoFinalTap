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
	
	// Tarea 1-2
	
	public List<Persona> personaBYnombreyAapellido(String nom, String apell) {
		return personaR.personaByNombreyApellido(nom, apell);
	}
	public List<Persona> listarPersonaconEDAD(){
		return personaR.personaEdad();
	}
	public List<Persona> personaBYnombreyedad(String nom, int edad) {
		return personaR.personaByNombreyEdad(nom, edad);
	}
	
	public List<Persona> personaBYcorreo(String email) {
		return personaR.personaByCorreo(email);
	}
	public List<Persona> consulta(){
		return personaR.consulta5();
	}
	
	
	// Tarea 3
	
	public List<Persona> buscarNombre(String nombre){
		return personaR.findByNombre(nombre);
	}
	public List<Persona> buscarNombreLetra(String nombre){
		return personaR.findByNombreContaining(nombre);
	}
	public List<Persona> buscarApellLetra(String apellido){
		return personaR.findByApellidoContaining(apellido);
	}
	public List<Persona> buscarEmailDominio(String dominio){
		return personaR.findByEmailContaining(dominio);
	}
	public List<Persona> buscarAppOrNom(String apellido,String nombre){
		return personaR.findPeopleDistinctByApellidoOrNombre(apellido, nombre);
	}
	public List<Persona> buscarEdad1(int edad){
		return personaR.findByEdadGreaterThan(edad);
	}
	public List<Persona> buscarEdad2(int edad){
		return personaR.findByEdadGreaterThanEqual(edad);
	}
	public List<Persona> buscarEdad3(int edad){
		return personaR.findByEdadLessThan(edad);
	}
	public List<Persona> buscarEdad4(int edad){
		return personaR.findByEdadLessThanEqual(edad);
	}
	public Persona buscarEdad5(){
		return personaR.findTopByOrderByEdadDesc();
	}
	
	
	// uso de DTO
	
	public PersonaDTO nombreCompleto(String ced) {
		Persona persona = personaR.findByCedula(ced);
		PersonaDTO nombreDTO = new PersonaDTO();
		nombreDTO.setNombreCompleto(persona.getNombre()+" "+persona.getApellido());
		return nombreDTO;
	}
	
	public Persona personaIDMax() {
		return personaR.obtenerid();
	}
	
}
