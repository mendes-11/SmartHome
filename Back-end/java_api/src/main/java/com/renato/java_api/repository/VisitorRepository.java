package com.renato.java_api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import com.renato.java_api.model.VisitorModel;
import java.util.List;

public interface VisitorRepository extends MongoRepository<VisitorModel, String> {
    @Query("{'IDVisitor.id': ?0 }")
    List<VisitorModel> findByUserID(String IDVisitor);


    @Query("{'name': ?1, 'sexo': ?0}")
    List<VisitorModel> findByAgeAndName(String name, String sexo);

    @Query("{'cpf': ?0}")
    List<VisitorModel> findByCPF(String cpf);
}