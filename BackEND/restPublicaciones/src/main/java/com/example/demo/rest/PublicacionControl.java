package com.example.demo.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Publicacion;
import com.example.demo.service.PublicacionService;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class PublicacionControl {
	@Autowired
	PublicacionService publiS;
	@PostMapping
	@CrossOrigin
	public ResponseEntity savePublicacion(@RequestBody Publicacion publicacion) {
		publiS.crearPublicacion(publicacion);
		return ResponseEntity.ok("OK");
	}
	@GetMapping(path = "/list", produces = "application/json")
	public List<Publicacion> listarPublicaciones(){
		return publiS.listarPublicaciones();
	}
	@GetMapping(path = "/buscar/{cedula}", produces = "application/json")
	public List<Publicacion> buscarPublicacionesPorCedula(String cedula){
		return publiS.buscarPorCedula(cedula);
	}
}
