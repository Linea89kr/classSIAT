package com.example.di.bean;

import lombok.ToString;
import org.springframework.stereotype.Component;

@ToString(includeFieldNames = true)
@Component
public class DataBean3 {
    private String data1 = "aaa";
    private String data2 = "bbb";

    @ToString.Include
    public String getHello(){
        return "Hello";
    }
}
