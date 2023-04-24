package com.example.demo.controller;

import com.example.demo.dto.RoadMapDto;
import com.example.demo.model.RoadMap;
import com.example.demo.service.RoadMapService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("api/roadmap")
@RequiredArgsConstructor
public class RoadMapController {
    private final RoadMapService roadMapService;
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createRoadMap(@RequestBody RoadMapDto req){
        roadMapService.createRoadMap(req);
    }
    @GetMapping("/{uid}")
    @ResponseStatus(HttpStatus.OK)
    public List<RoadMap> getRoadMapByUser(@PathVariable String uid){
        return roadMapService.getRoadMapByUser(uid);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteRoadMap(@PathVariable String id){
        roadMapService.deleteRoadMap(id);
    }
}
