package com.example.di;

import com.example.di.bean.DataBean1;
import com.example.di.bean.DataBean2;
import com.example.di.bean.DataBean3;
import com.example.di.bean.DataBean4;
import lombok.Getter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class LombokApplication {
    public static void main(String[] args) {
        ConfigurableApplicationContext cac =
                SpringApplication.run(LombokApplication.class, args);

        DataBean1 data1 = cac.getBean(DataBean1.class);
        data1.setData1("aaa");
        System.out.println(data1.getData1());

        System.out.println("=================================");

        DataBean2 data2 = cac.getBean(DataBean2.class);
        data2.getData1();
        System.out.println(data2.getData1());
        data2.setData2("xyz");

        System.out.println("=================================");

        DataBean3 data3 = cac.getBean(DataBean3.class);
        System.out.println(data3);

        System.out.println("=================================");

        DataBean4 data4 = cac.getBean(DataBean4.class);
        System.out.println(data4);

        System.out.println("=================================");

        DataBean4 data5 = cac.getBean(DataBean4.class,"aaa", "bbb");
        System.out.println(data5);
    }
}
