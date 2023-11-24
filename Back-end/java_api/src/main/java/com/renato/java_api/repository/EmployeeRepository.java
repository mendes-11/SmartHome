package com.renato.java_api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import com.renato.java_api.model.EmployeeModel;
import java.util.List;

public interface EmployeeRepository extends MongoRepository<EmployeeModel, String> {
    @Query("{'IDEmployee.id': ?0 }")
    List<EmployeeModel> findByUserID(String IDEmployee);


    @Query("{'name': ?1, 'sexo': ?0}")
    List<EmployeeModel> findByAgeAndName(String name, String sexo);

    @Query("{'cpf': ?0}")
    List<EmployeeModel> findByCPF(String cpf);
}