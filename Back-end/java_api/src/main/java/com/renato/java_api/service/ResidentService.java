package com.renato.java_api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renato.java_api.model.ResidentModel;
import com.renato.java_api.repository.ResidentRepository;


@Service
public class ResidentService {

    @Autowired
    private ResidentRepository ResidentRepository;

    public void save(ResidentModel Resident) {
        this.ResidentRepository.save(Resident);
    }

    public List<ResidentModel> findAll() {
        return this.ResidentRepository.findAll();
    }

    public List<ResidentModel> findByCPF(String cpf) {
        return this.ResidentRepository.findByCPF(cpf);
    }

    public List<ResidentModel> findByNameAndSexo(String name, String sexo) {
        return (List<ResidentModel>) this.ResidentRepository.findByAgeAndName(name, sexo);
    }

    public void delete(String id) {
        this.ResidentRepository.deleteById(id);
    }
}