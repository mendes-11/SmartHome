package com.renato.java_api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renato.java_api.model.AdmModel;
import com.renato.java_api.repository.AdmRepository;


@Service
public class AdmService {

    @Autowired
    private AdmRepository AdmRepository;

    public void save(AdmModel Adm) {
        this.AdmRepository.save(Adm);
    }

    public List<AdmModel> findAll() {
        return this.AdmRepository.findAll();
    }

    public List<AdmModel> findByCPF(String cpf) {
        return this.AdmRepository.findByCPF(cpf);
    }

    public void delete(String id) {
        this.AdmRepository.deleteById(id);
    }
}