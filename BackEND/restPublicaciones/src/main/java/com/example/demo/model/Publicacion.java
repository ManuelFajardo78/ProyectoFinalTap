package com.example.demo.model;

import java.sql.Blob;
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
        private Blob imagen;
        private Blob audio;
}
