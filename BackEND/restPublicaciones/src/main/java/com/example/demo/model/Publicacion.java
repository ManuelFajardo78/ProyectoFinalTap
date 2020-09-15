package com.example.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data

@Document
public class Publicacion {
	private String usuario;
	private String publicacion;
	private String Fecha;
        private String imagen;
        private String cedula;
        private String audio;
}
