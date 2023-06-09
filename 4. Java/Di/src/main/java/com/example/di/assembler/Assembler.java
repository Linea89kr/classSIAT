package com.example.di.assembler;

import com.example.di.service.MemberService;

// 사용자가 사용 가능하 서비스를 연결해주는 클래스

public class Assembler {
    private MemberService service1;

    public Assembler(){
        this.service1 = new MemberService();
    }

    public MemberService getService1(){
        return service1;
    }
}
