package com.example.demo.repository;

import com.example.demo.model.Topic;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TopicRepository extends MongoRepository<Topic, String> {
    List<Topic> getAllByRoadmapId (String id);
}
