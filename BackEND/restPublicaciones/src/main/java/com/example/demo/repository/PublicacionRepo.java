package com.example.demo.repository;



import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Publicacion;

public interface PublicacionRepo extends MongoRepository<Publicacion, Integer>{
	
	List<Publicacion> findByUsuario(String usuario);   
	
}
