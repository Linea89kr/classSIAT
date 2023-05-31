package com.example.jsp1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/example01")
public class Example01Controller {

//    @RequestMapping(value="/example01/test1", method= RequestMethod.GET)
    @RequestMapping(value="/test1", method= RequestMethod.GET)
    public String test1(){
        return "example01/test1";
    }
//    @RequestMapping(value="/example01/test2", method= RequestMethod.GET)
    @RequestMapping(value="/test2", method= RequestMethod.GET)
    public String test2(){
        return "example01/test2";
    }

//    @RequestMapping(value="/test3", method=RequestMethod.GET)
    @GetMapping("/test3")
    public String test3(){
        return "example01/test1/test3";
    }
//    @RequestMapping(value="/test4", method=RequestMethod.POST)
//    @PostMapping("/test4")
    @RequestMapping(value="/test4", method={RequestMethod.GET, RequestMethod.POST})
    public String test4(){
        return "example01/test1/test4";
    }
}
