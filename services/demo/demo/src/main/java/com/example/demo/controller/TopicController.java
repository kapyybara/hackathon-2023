package com.example.demo.controller;

import com.example.demo.dto.TopicDto;
import com.example.demo.model.Topic;
import com.example.demo.service.TopicService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("api/topic")
@RequiredArgsConstructor
public class TopicController {
    private final TopicService topicService;
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createTopic(@RequestBody TopicDto req){
        topicService.createTopic(req);
    }
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public List<Topic> getTopicsByRoadMap(@PathVariable String id){
        return topicService.getTopicsByRoadMap(id);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteTopic(@PathVariable String id){
        topicService.deleteTopic(id);
    }
}
