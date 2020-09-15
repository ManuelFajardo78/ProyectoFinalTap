package com.example.demo.rest;

//realizador por: Fredy Vásquez M5A

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Comentario;
import com.example.demo.service.ComentarioService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping()
public class ComentarioControl {
	@Autowired
	ComentarioService comentarioS;
	@PostMapping
	@CrossOrigin
	public ResponseEntity saveComentario(@RequestBody Comentario comentario) {
		usuarioS.crearComentario(comentario);
		return ResponseEntity.ok("OK");
	}
	
	@GetMapping(path = "/list", produces = "application/json")
	public List<Comentario> listarComentario(){
		return comentarioS.listarComentario();
	}
	
}
