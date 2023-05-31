package com.spring.controller;

import com.spring.DTO.DataDTO1;
import com.spring.DTO.DataDTO2;
import com.spring.DTO.DataDTO3;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;


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
    @GetMapping("/test4/{data1},")
    public String test4(@PathVariable int[] data1){

        for (int dt:data1){
            System.out.println("data1: " + dt);
        }

        return "example02/result";
    }

    @GetMapping("/test5")
//    public String test5(@RequestParam int data1,
//                        @RequestParam int data2,
//                        @RequestParam int[] data3){

            public String test5(@RequestParam(value="data1", required = false, defaultValue = "0") int data1,
                                @RequestParam(value="data2", required = false, defaultValue = "0") int data2,
                                @RequestParam(value="data3", required = false, defaultValue = "0") int[] data3){
        System.out.println("data1: " + data1);
        System.out.println("data2: " + data2);
        for (int dt:data3){
            System.out.println("data3: " + dt);
        }
        return "example02/result";
    }
    @GetMapping("/test6")
    public String test6(@RequestParam int data1,
                        @RequestParam(required = false) String data2,
                        @RequestParam(defaultValue = "5") int[] data3){
        System.out.println("data1: " + data1);
        if (data2 != null) {
            System.out.println("data2: " + data2);
        }

        for (int dt:data3){
            System.out.println("data3: " + dt);
        }
        return "example02/result";
    }

    @GetMapping("/test7")
    public String test7(@RequestParam Map<String, String> map,
                        @RequestParam List<String> data3){
        String data1 = map.get("data1");
        String data2 = map.get("data2");
        String data33 = map.get("data3");

        System.out.println("data1: " + data1);
        System.out.println("data2: " + data2);
        System.out.println("data33: " + data33);

        for (String str:data3) {
            System.out.println("data3: " + str);
        }

        return "example02/result";
    }

    @GetMapping("/test8")
    public String test8(@ModelAttribute DataDTO1 dto){
        System.out.println("data1: " + dto.getData1());
        System.out.println("data2: " + dto.getData2());

        for (int dt:dto.getData3()){
            System.out.println("data3: " + dt);
        }
        return "example02/result";
    }
    @GetMapping("/test9")
//    public String test9(@ModelAttribute DataDTO1 dto1,
//                        @ModelAttribute DataDTO2 dto2){

        public String test9(DataDTO1 dto1, DataDTO2 dto2, DataDTO3 dto3){
        System.out.println("dto1.data1: " + dto1.getData1());
        System.out.println("dto1.data2: " + dto1.getData2());

        for (int dt:dto1.getData3()){
            System.out.println("data3: " + dt);
        }

        System.out.println("dto2.data1 : " + dto2.getData1());
        System.out.println("dto2.data2 : " + dto2.getData2());

        System.out.println("dto3.data1 : " + dto3.getData1());
        System.out.println("dto3.data2 : " + dto3.getData2());
        for (int dt:dto3.getData3()){
            System.out.println("datRa3: " + dt);
        }

        return "example02/result";
    }

}














