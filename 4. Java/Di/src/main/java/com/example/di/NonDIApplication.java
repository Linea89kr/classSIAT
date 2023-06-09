package com.example.di;

import com.example.di.assembler.Assembler;
import com.example.di.assembler.IAssembler;
import com.example.di.service.IMemberInterface;
import com.example.di.service.MemberService;

import java.lang.reflect.Member;

public class NonDIApplication {
    public static void main(String[] args) {
        // 시나리오1
        // - 일반적인 Class 선언 방식으로 회원을 저장하는 로직 생성
        // 구성요소
        // - Service (비즈니스 로직)
        // - Assembler (사용자의 인터페이스와 로직을 연결시켜주는 클래스)
        // - main (사용자가 실행하는 로직)

        Assembler assembler = new Assembler();
        MemberService service1 = assembler.getService1();
        service1.saveMember();

        // 시나리오 2
        // - 클래스의 직접 사용을 막기 위해 인터페이스를 사용하여 클래스간의 결합도를 낮추고

        IAssembler assembler2 = new IAssembler();
        IMemberInterface service2 = assembler2.getService();
        service2.saveMember();
    }
}
