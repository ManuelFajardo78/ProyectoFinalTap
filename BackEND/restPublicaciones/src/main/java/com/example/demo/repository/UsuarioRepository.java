/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.repository;

import com.example.demo.model.Persona;import com.example.demo.model.Usuario;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface UsuarioRepository extends MongoRepository<Usuario, String>{
	
	@Query(value = "{$and:[{usuario: ?0},{password: ?1}]}")
	Usuario usuarioByUseryPass(String user, String pass);
	
	Usuario findByUsuario(String user);
}
