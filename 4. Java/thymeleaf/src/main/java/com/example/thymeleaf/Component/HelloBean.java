package com.example.thymeleaf.Component;

import org.springframework.stereotype.Component;

@Component("HelloBean")
public class HelloBean {
    public String hello(String data){
        return "hello " + data;
    }
}
