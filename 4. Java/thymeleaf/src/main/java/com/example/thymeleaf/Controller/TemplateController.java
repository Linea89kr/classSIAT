package com.example.thymeleaf.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/fragment")
public class TemplateController {

    @GetMapping("/fragmeentMain")
    public String fragmentMain(){
         return "basic/01-text-basic";
    }

}
