package com.example.di;

import com.example.di.service.IMemberServiceImpl;
import com.example.di.service.MemberService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class DiApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext cac =
                SpringApplication.run(DiApplication.class, args);
        MemberService service = cac.getBean("service1", MemberService.class);
        service.saveMember();

        IMemberServiceImpl service2 = cac.getBean("service2", IMemberServiceImpl.class);
        service2.saveMember();

        IMemberServiceImpl service3 = cac.getBean("service2", IMemberServiceImpl.class);
        service2.saveMember();
        System.out.println("service2 : " + service2);
        System.out.println("service3 : " + service3);
        System.out.println(service2.getNum());
        System.out.println(service3.getNum());
    }
}
