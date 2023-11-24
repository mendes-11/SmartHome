package com.renato.java_api.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import java.util.Date;

@Data
@Document
public class EmployeeModel {
    @Id
    private String IDFuncionario;
    private String nome;
    private Date dataNascimento;
    private String sexo;
    private String email;
    private String cpf;
    private String turno;
    private String funcao;

    public EmployeeModel(String nome, Date dataNascimento, String sexo, String email, String cpf, 
     String turno, String funcao) {

        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.email = email;
        this.cpf = cpf;
        this.turno = turno;
        this.funcao = funcao;
    
    }

    public EmployeeModel(String nome, String sexo){
        this.nome = nome;
        this.sexo = sexo;

    }

    public EmployeeModel(String IDFuncionario) {
        this.IDFuncionario = IDFuncionario;
    }

    public EmployeeModel() {
    }
}