package com.example.jsp1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.WebRequest;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/example02")
public class Example02Controller {

    @GetMapping("/test1")
    public String test1(HttpServletRequest req){
        String data1 = req.getParameter("data1");
        String data2 = req.getParameter("data2");
        String[] data3 = req.getParameterValues("data3");

        System.out.println("data1 : "+data1);
        System.out.println("data2 : "+data2);

        for (String str1: data3) {
            System.out.println("data3 : "+str1);
        }

        return "example02/result";
    }
    @PostMapping("/test2")
//    public String test2(HttpServletRequest req){
    public String test2(WebRequest req){
        String data1 = req.getParameter("data1");
        String data2 = req.getParameter("data2");
        String[] data3 = req.getParameterValues("data3");

        System.out.println("data1 : "+data1);
        System.out.println("data2 : "+data2);

        for (String str1: data3) {
            System.out.println("data3 : "+str1);
        }

        return "example02/result";
    }

    @GetMapping("/test3/{data1}/{data2}/{data3}")
//    public String test3(@PathVariable("data1") String str1,
//                        @PathVariable("data2") String str2,
//                        @PathVariable("data3") String str3){
//    public String test3 (@PathVariable("data1") int str1,
//                        @PathVariable("data2") int str2,
//                        @PathVariable("data3") int str3){
        public String test3(@PathVariable int data1,
                        @PathVariable int data2,
                        @PathVariable int data3){

        System.out.println("data1 : "+data1);
        System.out.println("data2 : "+data2);
        System.out.println("data3 : "+data3);

        System.out.println("add : "+(data1+data2+data3));

        return "example02/result";
    }
}
