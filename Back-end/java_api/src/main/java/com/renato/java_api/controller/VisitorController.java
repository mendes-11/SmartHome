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

import com.renato.java_api.model.VisitorModel;
import com.renato.java_api.service.VisitorService;


@RestController
@RequestMapping("/visita")
public class VisitorController {

    @Autowired
    private VisitorService userService;

    @GetMapping("")
    public List<VisitorModel> findAll() {
        List<VisitorModel> listVisit = userService.findAll();
        return listVisit;
    }

    @GetMapping("/{age}/{name}")
    public List<VisitorModel> getUserByAgeAndName(@PathVariable String name, @PathVariable String sexo) {
        List<VisitorModel> listVisit = userService.findByNameAndSexo(name, sexo);
        return listVisit;
    }

    @GetMapping("/{cpf}")
    public List<VisitorModel> findByCPF(@PathVariable String cpf) {
        List<VisitorModel> listVisit = userService.findByCPF(cpf);
        return listVisit;
    }

    @PostMapping("")
    public void newUser(@RequestBody VisitorModel newUser) {
        userService.save(newUser);
    }


    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.delete(id);
    }

}