package com.example.thymeleaf.Controller;

import com.example.thymeleaf.DTO.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.*;

@Controller
@RequestMapping("/form")
public class FormController {

    @GetMapping("object")
    public String test1(Model model){
        UserDTO2 bean = new UserDTO2();
        bean.setUserName("Kevin");
        bean.setUserId("KJR");
        bean.setUserPw("1234");
        bean.setUserPostcode("98765");
        bean.setUserAddress1("경기도");
        bean.setUserAddress2("수원시");
        model.addAttribute("userVO", bean);
        model.addAttribute("action", "/form/result1");
        return "form/01-object";
    }

    @PostMapping("result1")
    public String result1(UserDTO2 dto){
        System.out.println(dto.getUserId());
        return "form/result1";
    }

    @GetMapping("check")
    public String test2(Model model){
        UserDTO3 bean = new UserDTO3();
        bean.setUserName("Kevin");
        bean.setUserId("KJR");
        bean.setUserPw("1234");
        bean.setUserPostcode("98765");
        bean.setUserAddress1("경기도");
        bean.setUserAddress2("수원시");
        bean.setUserCheck(false);
        model.addAttribute("userVO", bean);
        model.addAttribute("action", "/form/result2");
        return "form/02-check";
    }

    @PostMapping("result2")
    public String result2(UserDTO3 dto){
        System.out.println(dto.getUserId());
        System.out.println(dto.isUserCheck());
        return "form/result1";
    }

    @GetMapping("checks")
    public String test3(Model model){
        UserDTO4 bean = new UserDTO4();
        bean.setUserName("Kevin");
        bean.setUserId("KJR");
        bean.setUserPw("1234");
        bean.setUserPostcode("98765");
        bean.setUserAddress1("경기도");
        bean.setUserAddress2("수원시");

        // 가지고 있는 값
        List<String> list = new ArrayList<>();
        list.add("SEOUL");
        list.add("JEJU");
        bean.setStates(list);

        // 포멧
        Map<String, String> regions = new LinkedHashMap<>();
        regions.put("SEOUL","서울");
        regions.put("BUSAN","부산");
        regions.put("JEJU","제주");

        model.addAttribute("regions",regions);
        model.addAttribute("userVO", bean);
        model.addAttribute("action", "/form/result3");
        return "form/03-checks";
    }

    @PostMapping("result3")
    public String result3(UserDTO4 dto){
        System.out.println(dto.getUserId());
        System.out.println(dto.getStates());
        return "form/result1";
    }

    @GetMapping("radio")
    public String test4(Model model) {
        UserDTO5 bean = new UserDTO5();
        bean.setUserName("Kevin");
        bean.setUserId("KJR");
        bean.setUserPw("1234");
        bean.setUserPostcode("98765");
        bean.setUserAddress1("경기도");
        bean.setUserAddress2("수원시");
        bean.setState(Region.JEJU);

        // 포멧
        model.addAttribute("stateType",Region.values());

        model.addAttribute("userVO", bean);
        model.addAttribute("action", "/form/result4");

        return "form/04-radio";
    }

    @PostMapping("result4")
    public String result4(UserDTO5 dto){
        System.out.println(dto.getUserId());
        System.out.println(dto.getState());
        return "form/result1";
    }

    @GetMapping("select")
    public String test5(Model model) {
        UserDTO6 bean = new UserDTO6();
        bean.setUserName("Kevin");
        bean.setUserId("KJR");
        bean.setUserPw("1234");
        bean.setUserPostcode("98765");
        bean.setUserAddress1("경기도");
        bean.setUserAddress2("수원시");
        bean.setDeliveryCode("FAST");

        // 포멧
        List<DeliveryCode> list = Arrays.asList(
                new DeliveryCode("FAST","빠른 배송"),
                new DeliveryCode("NORMAL","일반 배송"),
                new DeliveryCode("SLOW","느린 배송"));

        model.addAttribute("deliveryCodes",list);

        model.addAttribute("userVO", bean);
        model.addAttribute("action", "/form/result5");

        return "form/05-select";
    }

    @PostMapping("result5")
    public String result5(UserDTO6 dto){
        System.out.println(dto.getUserId());
        System.out.println(dto.getDeliveryCode());
        return "form/result1";
    }
}
