/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data

@Document
public class Usuario {
    @Id 
	private int id;
	private String cedula;
	private String nombre;
	private String apellido;
	private String email;
	private String fech_Nacimiento;
	private String sexo;
        private int edad;
        private String password;
        private String usuario;
        private String imagen;
}
