package com.renato.java_api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import com.renato.java_api.model.ResidentModel;
import java.util.List;

public interface ResidentRepository extends MongoRepository<ResidentModel, String> {
    @Query("{'IDMorador.id': ?0 }")
    List<ResidentModel> findByUserID(String IDMorador);


    @Query("{'name': ?1, 'sexo': ?0}")
    List<ResidentModel> findByAgeAndName(String name, String sexo);

    @Query("{'cpf': ?0}")
    List<ResidentModel> findByCPF(String cpf);
}