package com.example.demo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Publicacion;

public interface PublicacionRepo extends MongoRepository<Publicacion, String>{
	List<Publicacion> findByCedula(String ced);
}
