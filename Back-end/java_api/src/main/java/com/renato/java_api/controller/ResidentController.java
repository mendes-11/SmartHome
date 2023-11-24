package com.renato.java_api.controller;

import java.util.List;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.renato.java_api.model.ResidentModel;
import com.renato.java_api.service.ResidentService;



@RestController
@RequestMapping("/morador")
public class ResidentController {

    @Autowired
    private ResidentService userService;

    @GetMapping("")
    public List<ResidentModel> findAll() {
        List<ResidentModel> listRes = userService.findAll();
        return listRes;
    }

    @GetMapping("/{age}/{name}")
    public List<ResidentModel> getUserByAgeAndName(@PathVariable String name, @PathVariable String sexo) {
        List<ResidentModel> listRes = userService.findByNameAndSexo(name, sexo);
        return listRes;
    }

    @GetMapping("/{cpf}")
    public List<ResidentModel> findByCPF(@PathVariable String cpf) {
        List<ResidentModel> listRes = userService.findByCPF(cpf);
        return listRes;
    }

    @PostMapping("")
    public void newUser(@RequestBody ResidentModel newUser) {
        userService.save(newUser);
    }


    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.delete(id);
    }

}