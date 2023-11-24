package com.renato.java_api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renato.java_api.model.VisitorModel;
import com.renato.java_api.repository.VisitorRepository;


@Service
public class VisitorService {

    @Autowired
    private VisitorRepository VisitorRepository;

    public void save(VisitorModel Visitor) {
        this.VisitorRepository.save(Visitor);
    }

    public List<VisitorModel> findAll() {
        return this.VisitorRepository.findAll();
    }

    public List<VisitorModel> findByCPF(String cpf) {
        return this.VisitorRepository.findByCPF(cpf);
    }

    public List<VisitorModel> findByNameAndSexo(String name, String sexo) {
        return (List<VisitorModel>) this.VisitorRepository.findByAgeAndName(name, sexo);
    }

    public void delete(String id) {
        this.VisitorRepository.deleteById(id);
    }
}