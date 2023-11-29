package com.renato.java_api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import com.renato.java_api.model.AdmModel;
import java.util.List;

public interface AdmRepository extends MongoRepository<AdmModel, String> {
    @Query("{'IDAdm.id': ?0 }")
    List<AdmModel> findByUserID(String IDAdm);


    @Query("{'name': ?1, 'sexo': ?0}")
    List<AdmModel> findByAgeAndName(String name, String sexo);

    @Query("{'cpf': ?0}")
    List<AdmModel> findByCPF(String cpf);
}