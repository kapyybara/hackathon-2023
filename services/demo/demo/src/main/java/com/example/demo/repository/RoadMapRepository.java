package com.example.demo.repository;

import com.example.demo.model.RoadMap;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface RoadMapRepository extends MongoRepository<RoadMap, String> {
    List<RoadMap> getAllByCreateBy(String uid);
}
