/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.service;

import com.example.demo.model.Login;
import com.example.demo.model.Usuario;
import com.example.demo.repository.LoginRepository;
import com.example.demo.repository.UsuarioRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {
    @Autowired
	private UsuarioRepository usuarioR;
	
	public Usuario crearUsuario(Usuario usuario) {
		return usuarioR.save(usuario);
	}
	
	public List<Usuario> listarUsuario(){
		return usuarioR.findAll();
	}
    
}
