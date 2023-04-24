package com.example.demo.service;

import com.example.demo.dto.TopicDto;
import com.example.demo.model.Topic;
import com.example.demo.repository.TopicRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class TopicService {
    private final TopicRepository topicRepository;
    public void createTopic(TopicDto req) {
        Topic topic = Topic.builder()
                .name(req.getName())
                .slide(req.getSlide())
                .roadmapId(req.getRoadmapId())
                .week(req.getWeek())
                .build();
        topicRepository.save(topic);
    }

    public List<Topic> getTopicsByRoadMap(String id) {
        return topicRepository.getAllByRoadmapId(id);
    }

    public void deleteTopic(String id) {
        topicRepository.deleteById(id);
    }
}
