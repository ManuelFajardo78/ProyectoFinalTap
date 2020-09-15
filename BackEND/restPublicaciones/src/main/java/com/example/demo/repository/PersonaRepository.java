package com.example.demo.repository;

import java.util.List;

//realizador por: Fredy Vásquez M5A

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.demo.model.Persona;

public interface PersonaRepository extends MongoRepository<Persona, String>{
	
	// Tarea 1-2
	
	@Query(value = "{$and:[{nombre: ?0},{apellido: ?1}]}")
	List<Persona> personaByNombreyApellido(String nom, String apell);
	
	@Query(value = "{edad:{$exists: true}}")
	List<Persona> personaEdad();
	
	@Query(value = "{$or:[{nombre: /^?0/},{edad: {$lt: 18}}]}")
	List<Persona> personaByNombreyEdad(String nom, int edad);
	
	@Query(value = "{email: /?0/}")
	List<Persona> personaByCorreo(String email);
	
	@Query(value = "{$and:[{edad: {$gte: 18}},{email: /.com$/}]}")
	List<Persona> consulta5();
	
	// Tarea 3 https://docs.spring.io/spring-data/mongodb/docs/current/reference/html/#repositories.query-methods
	// busca a la persona por el nombre
	List<Persona> findByNombre(String nombre);
	// busca por letras que contena el nombre 
	List<Persona> findByNombreContaining(String nombre);
	// busca por letras que contena el apellido
	List<Persona> findByApellidoContaining(String letra);
	// busca por el dominio del correo
	List<Persona> findByEmailContaining(String dominio);
	// busca por el nombre o el apellido
	List<Persona> findPeopleDistinctByApellidoOrNombre(String apellido, String nombre);
	// buscar la edad mayor a la ingresada
	List <Persona> findByEdadGreaterThan(int edad);
	// buscar la edad mayor o igual a la ingresada
	List <Persona> findByEdadGreaterThanEqual(int edad);
	// buscar la edad menor a la ingresada
	List <Persona> findByEdadLessThan (int edad);
	// buscar la edad menor o igual a la ingresada
	List <Persona> findByEdadLessThanEqual (int edad);
	// busca la persona con la mayor edad
	Persona findTopByOrderByEdadDesc();
	
	Persona findByCedula(String ced);
	
	@Query(value = "{$max: id")
	Persona obtenerid();
}
