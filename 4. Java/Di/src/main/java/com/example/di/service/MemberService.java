package com.example.di.service;

import org.springframework.stereotype.Component;

@Component("service1")
public class MemberService {

    // 회원 저장 로직
    public void saveMember(){
        System.out.println("회원을 저장했습니다.");
    }
}
