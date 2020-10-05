package com.example.demo.rest;


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

import com.example.demo.model.Usuario;
import com.example.demo.service.UsuarioService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping()
public class UsuarioControl {
	@Autowired
	UsuarioService usuarioS;
	@PostMapping(path = "/guardarusuario")
	@CrossOrigin
	public ResponseEntity saveUsuario(@RequestBody Usuario usuario) {
		usuarioS.crearUsuario(usuario);
		return ResponseEntity.ok("OK usuario");
	}
	
	@GetMapping(path = "/listuser", produces = "application/json")
	public List<Usuario> listarUsuario(){
		return usuarioS.listarUsuario();
	}
	
	@GetMapping(path = "/buscar/{user},{pass}", produces = "application/json")
	public Usuario verificarUsuario(String user, String pass){
		return usuarioS.verifUser(user, pass);
	}
}
