package com.renato.java_api.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import java.util.Date;

@Data
@Document
public class AdmModel {
    @Id
    private String IDAdm;
    private String nome;
    private Date dataNascimento;
    private String sexo;
    private String email;
    private String cpf;
    private short bloco;
    private short apartamento;
    private String numeroVagaEstacionamento;
    private String senha;

    public AdmModel(String nome, Date dataNascimento, String sexo, String email, String cpf, 
    short bloco, short apartamento, String NumeroVagaEstacionamento, String senha) {

        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.email = email;
        this.cpf = cpf;
        this.bloco = bloco;
        this.apartamento = apartamento;
        this.numeroVagaEstacionamento = NumeroVagaEstacionamento;
        this.senha = senha;
    }

    public AdmModel(String nome, Date dataNascimento, String sexo, String email, String cpf) {

        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.email = email;
        this.cpf = cpf;
        this.senha = senha;
        
    }


    public AdmModel(String nome, String sexo){
        this.nome = nome;
        this.sexo = sexo;

    }

    public AdmModel(String IDAdm) {
        this.IDAdm = IDAdm;
    }

    public AdmModel() {
    }
}