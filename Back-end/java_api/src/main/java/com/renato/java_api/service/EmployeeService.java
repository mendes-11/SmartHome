package com.renato.java_api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renato.java_api.model.EmployeeModel;
import com.renato.java_api.repository.EmployeeRepository;


@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository EmployeeRepository;

    public void save(EmployeeModel Employee) {
        this.EmployeeRepository.save(Employee);
    }

    public List<EmployeeModel> findAll() {
        return this.EmployeeRepository.findAll();
    }

    public List<EmployeeModel> findByCPF(String cpf) {
        return this.EmployeeRepository.findByCPF(cpf);
    }

    public List<EmployeeModel> findByNameAndSexo(String name, String sexo) {
        return (List<EmployeeModel>) this.EmployeeRepository.findByAgeAndName(name, sexo);
    }

    public void delete(String id) {
        this.EmployeeRepository.deleteById(id);
    }
}