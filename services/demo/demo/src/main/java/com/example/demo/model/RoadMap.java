package com.example.demo.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(value = "roadmap")
public class RoadMap {
    @Id
    private String id;
    private String name;
    private Integer amountTime;
    private String des;
    private Boolean isEnd;
    private Date create;
    private String createBy;

}
