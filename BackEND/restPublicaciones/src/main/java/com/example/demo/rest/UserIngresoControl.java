package com.example.demo.rest;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.UserIngreso;
import com.example.demo.repository.UserIngresoRepository;
import com.example.demo.service.UserIngresoService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping()
public class UserIngresoControl {
	@Autowired
	UserIngresoService usuarioS;
	@PostMapping(path = "/guardaruserig")
	@CrossOrigin
	public ResponseEntity saveUserIngreso(@RequestBody UserIngreso usuario) {
		usuarioS.crearUser(usuario);
		return ResponseEntity.ok("OK usuario");
	}
	
	@PutMapping("/useringresoby/{id},{username}")
	@CrossOrigin
	public  UserIngreso updateUser(@PathVariable String  username, @PathVariable int id) {
        return usuarioS.actUser(username, id);
    }
	
	@GetMapping(path = "/listuseringreso", produces = "application/json")
	public List<UserIngreso> listarUsuario(){
		return usuarioS.listarUser();
	}
}
