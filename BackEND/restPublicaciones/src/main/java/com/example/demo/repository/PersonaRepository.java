package com.example.demo.repository;

import java.util.List;

//realizador por: Fredy Vásquez M5A

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.demo.model.Persona;

public interface PersonaRepository extends MongoRepository<Persona, String>{
	
	Persona findByCedula(String ced);
}
