package com.renato.java_api.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import java.util.Date;

@Data
@Document
public class ResidentModel {
    @Id
    private String IDMorador;
    private String nome;
    private Date dataNascimento;
    private String sexo;
    private String email;
    private String cpf;
    private short bloco;
    private short apartamento;
    private Double valorApartamento;
    private String numeroVagaEstacionamento;

    public ResidentModel(String nome, Date dataNascimento, String sexo, String email, String cpf, 
    short bloco, short apartamento, Double valorApartamento, String NumeroVagaEstacionamento) {

        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.email = email;
        this.cpf = cpf;
        this.bloco = bloco;
        this.apartamento = apartamento;
        this.valorApartamento = valorApartamento;
        this.numeroVagaEstacionamento = NumeroVagaEstacionamento;
    }

    public ResidentModel(String nome, String sexo){
        this.nome = nome;
        this.sexo = sexo;

    }

    public ResidentModel(String IDMorador) {
        this.IDMorador = IDMorador;
    }

    public ResidentModel() {
    }
}

