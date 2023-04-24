package com.example.demo.controller;

import com.example.demo.dto.QuizDto;
import com.example.demo.model.Quiz;
import com.example.demo.service.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("api/quiz")
@RequiredArgsConstructor
public class QuizController {
    private final QuizService quizService;
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createQuiz(@RequestBody QuizDto req){
        quizService.createQuiz(req);
    }
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public List<Quiz> getQuizByTopic(@PathVariable String id){
        return quizService.getQuizByTopic(id);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteQuiz(@PathVariable String id){
        quizService.deleteQuiz(id);
    }
}
