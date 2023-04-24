package com.example.demo.service;

import com.example.demo.dto.RoadMapDto;
import com.example.demo.model.RoadMap;
import com.example.demo.repository.RoadMapRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class RoadMapService {
    private final RoadMapRepository roadMapRepository;
    public void createRoadMap(RoadMapDto req) {
        RoadMap roadMap = RoadMap.builder()
                .name(req.getName())
                .amountTime(req.getAmountTime())
                .des(req.getDes())
                .isEnd(req.getIsEnd())
                .create(req.getCreate())
                .createBy(req.getCreateBy())
                .build();
        roadMapRepository.save(roadMap);
    }

    public List<RoadMap> getRoadMapByUser(String uid) {
        return roadMapRepository.getAllByCreateBy(uid);
    }

    public void deleteRoadMap(String id) {
        roadMapRepository.deleteById(id);
    }
}
