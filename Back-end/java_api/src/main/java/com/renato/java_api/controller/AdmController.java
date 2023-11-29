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

import com.renato.java_api.model.AdmModel;
import com.renato.java_api.service.AdmService;


@RestController
@RequestMapping("/visita")
public class AdmController {

    @Autowired
    private AdmService userService;

    @GetMapping("")
    public List<AdmModel> findAll() {
        List<AdmModel> listVisit = userService.findAll();
        return listVisit;
    }

    @GetMapping("/{cpf}")
    public List<AdmModel> findByCPF(@PathVariable String cpf) {
        List<AdmModel> listVisit = userService.findByCPF(cpf);
        return listVisit;
    }

    @PostMapping("")
    public void newUser(@RequestBody AdmModel newUser) {
        userService.save(newUser);
    }


    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.delete(id);
    }

}