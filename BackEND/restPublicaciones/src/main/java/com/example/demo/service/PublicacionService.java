package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Publicacion;
import com.example.demo.repository.PublicacionRepo;


@Service
public class PublicacionService {
	@Autowired
	private PublicacionRepo publiR;
	
	public Publicacion crearPublicacion(Publicacion pub) {
		return publiR.save(pub);
	}
	
	public List<Publicacion> listarPublicaciones(){
		return publiR.findAll();
	}
	
	public List<Publicacion> listarPublicacionesBy(String usuario){
		return publiR.findByUsuario(usuario);
	}
	
	public long contarP(){
		return publiR.count();
	}
}
