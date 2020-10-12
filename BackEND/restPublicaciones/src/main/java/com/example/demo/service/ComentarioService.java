/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.service;

import com.example.demo.model.Comentario;
import com.example.demo.repository.ComentarioRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ComentarioService {
    @Autowired
	private ComentarioRepository comentarioR;
	
	public Comentario crearComentario(Comentario com) {
		return comentarioR.save(com);
	}
	
	public List<Comentario> listarComentario(){
		return comentarioR.findAll();
	}
    
	public long contarC(){
		return comentarioR.count();
	}
	
	public List<Comentario> listarComentarioByID(int id){
		return comentarioR.comentarioByIDP(id);
	}
}
