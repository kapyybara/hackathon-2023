package com.example.demo.service;

import com.example.demo.dto.QuizDto;
import com.example.demo.model.Quiz;
import com.example.demo.model.Topic;
import com.example.demo.repository.QuizRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class QuizService {
    private final QuizRepository quizRepository;
    public void createQuiz(QuizDto req) {
        Quiz quiz = Quiz.builder()
                .topicId(req.getTopicId())
                .ques(req.getQues())
                .ans(req.getAns())
                .trueAnw(req.getTrueAnw())
                .build();
        quizRepository.save(quiz);
    }

    public List<Quiz> getQuizByTopic(String id) {
        return quizRepository.getAllByTopicId(id);
    }

    public void deleteQuiz(String id) {
        quizRepository.deleteById(id);
    }
}
