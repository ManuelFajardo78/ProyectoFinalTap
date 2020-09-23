package com.example.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data

@Document
public class Publicacion {
	@Id 
	private int id;
	private String usuario;
	private String publicacion;
	private String Fecha;
}
