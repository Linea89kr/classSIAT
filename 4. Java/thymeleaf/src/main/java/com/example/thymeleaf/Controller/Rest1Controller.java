package com.example.thymeleaf.Controller;

import com.example.thymeleaf.DTO.UserDTO7;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/rest1")
public class Rest1Controller {

    @GetMapping("/page1")
    public String page1() {
        return "rest1/page1";
    }

    //REST API Example1
    // @ResponseBody : return data
    @GetMapping("/users1")
    @ResponseBody
    public ResponseEntity<List<UserDTO7>> test1() {
        UserDTO7 bean1 = new UserDTO7("name1", 100, 11.11, false);
        UserDTO7 bean2 = new UserDTO7("name2", 200, 22.22, true);
        UserDTO7 bean3 = new UserDTO7("name3", 300, 33.33, false);

        List<UserDTO7> list = new ArrayList<>();
        list.add(bean1);
        list.add(bean2);
        list.add(bean3);

        ResponseEntity<List<UserDTO7>> entry = new ResponseEntity<>(list, HttpStatus.OK);
        return entry;

    }

    @ResponseBody
    @PostMapping("/users2")
    public ResponseEntity<String> test2(@RequestBody Map<String, Object> map) {
        Iterator it = map.entrySet().iterator();

        while (it.hasNext()) {
            System.out.println(it.next());
        }
        return new ResponseEntity<>("Response successfully", HttpStatus.OK);
    }
}
