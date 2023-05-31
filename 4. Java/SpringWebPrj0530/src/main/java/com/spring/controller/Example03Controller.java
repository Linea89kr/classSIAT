package com.spring.controller;

import com.spring.DTO.DataDTO2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/example03")
public class Example03Controller {

    @GetMapping("/test1")
    public String test01() {
        return "example03/test1";
    }

    @PostMapping("/test2")
    public String test2() {
        return "example03/test2";
    }

    //    @GetMapping("/test3")
//    public String test3(HttpServletRequest req){
//        req.setAttribute("data1", 100);
//        req.setAttribute("data2", 200);
//        return "example03/test3";
//    }
    @GetMapping("/test3")
    public String test3(Model model) {
        model.addAttribute("data1", 100);
        model.addAttribute("data2", 200);
        return "example03/test3";
    }
    @GetMapping("/test4")
    public ModelAndView test4(ModelAndView mnv) {
        mnv.addObject("data1", 100);
        mnv.addObject("data2", 200);

        mnv.setViewName("example03/test4");

        return mnv;
    }

    @PostMapping("/test5")
    public String test5(DataDTO2 dto){
        return "example/test5";
    }

    @PostMapping("/test6")
    public String est6(DataDTO2 dto, Model model){
        model.addAttribute("dto", dto);
        return "example03/test6";
    }
}
