package com.example.thymeleaf.Controller;

import com.example.thymeleaf.DTO.UserDTO1;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/basic")
public class BasicController {

    @GetMapping("/text-basic")
    public String textBasic(Model model){
        model.addAttribute("data1", "hello spring!");
        model.addAttribute("data2", "hello <b>spring!</b>");
        return "basic/01-text-basic";
    }

    @GetMapping("/variable")
    public String variable(Model model){
        UserDTO1 userA = new UserDTO1("userA", 10);
        UserDTO1 userB = new UserDTO1("userB", 20);

        List<UserDTO1> list = new ArrayList<>();
        list.add(userA);
        list.add(userB);

        Map<String, UserDTO1> map = new HashMap<>();
        map.put("userA", userA);
        map.put("userB", userB);

        model.addAttribute("user", userA);
        model.addAttribute("users", list);
        model.addAttribute("userMap", map);

        return "basic/02-variable";
    }

    @GetMapping("/basic-objects")
    public String basicObjects(HttpSession session){
        session.setAttribute("sessionData","hello session");
        return "basic/03-basic-objects";
    }

    @GetMapping("date")
    public String date(Model model){
        model.addAttribute("LocalDateTime", LocalDateTime.now());
        return "/basic/04-date";
    }
    @GetMapping("link")
    public String link(Model model){
        model.addAttribute("param1", "data1");
        model.addAttribute("param2", "data2");
        return "/basic/05-link";
    }
    @GetMapping("literal")
    public String literal(Model model){
        model.addAttribute("data", "Spring!");
        return "/basic/06-literal";
    }
    @GetMapping("operation")
    public String operation(Model model){
        model.addAttribute("nullData", null);
        model.addAttribute("data", "Spring!");
        return "/basic/07-opration";
    }
    @GetMapping("attribute")
    public String attribute(){
        return "/basic/08-attribute";
    }
    @GetMapping("each")
    public String each(Model model){
        addUsers(model);
        return "/basic/09-each";
    }
    private void addUsers(Model model){
        List<UserDTO1> list = new ArrayList<>();
        list.add(new UserDTO1("userA", 10));
        list.add(new UserDTO1("userB", 20));
        list.add(new UserDTO1("userC", 30));
        model.addAttribute("users", list);
    }
    @GetMapping("condition")
    public String condition(Model model){
        addUsers(model);
        return "/basic/10-condition";
    }

    @GetMapping("javascript")
    public String javascript(Model model){
        model.addAttribute("user", new UserDTO1("userD", 10));
        addUsers(model);
        return "/basic/11-javascript";
    }
}















