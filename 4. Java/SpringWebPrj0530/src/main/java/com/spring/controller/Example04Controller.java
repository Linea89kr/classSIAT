package com.spring.controller;

import com.spring.DTO.UserDataDTO;
import org.apache.catalina.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/example04")
public class Example04Controller {

    @GetMapping("/test1")
//    public String test1(@ModelAttribute("userData") UserDataDTO dto) {
    public String test1(UserDataDTO dto, Model model) {
        dto.setUsername("KJR");
        dto.setUserid("Kevin");
        dto.setUserpassword("1234");
        dto.setUserpostcode("582819");
        dto.setUseraddress1("서울시");
        dto.setUseraddress2("강남구");

        model.addAttribute("userData", dto);

        return "example04/test1";
    }
}
