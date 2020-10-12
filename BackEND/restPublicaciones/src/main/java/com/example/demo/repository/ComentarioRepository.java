/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.repository;

import com.example.demo.model.Comentario;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface ComentarioRepository extends MongoRepository<Comentario, Integer> {
	
	@Query(value = "{id_publicacion: ?0}")
	List<Comentario> comentarioByIDP(int idp);  
    
}
