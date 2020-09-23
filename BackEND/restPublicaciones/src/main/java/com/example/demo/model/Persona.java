package com.example.demo.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data

@Document
public class Persona {
	@Id 
	private String cedula;
	private String nombre;
	private String apellido;
	private String email;
	

}
