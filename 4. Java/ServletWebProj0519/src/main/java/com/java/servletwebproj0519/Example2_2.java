package com.java.servletwebproj0519;

public class Example2_2 {
    // 접근 제한자(Access Modifier)
    // public: 어디서든 접근 가능
    // protected: 자신의 클래스 안, 같은 패키지, 그리고 상속으로만 접근 가능
    // default: 자신의 클래스 안과 같은 패키지 내에서만 접근 가능
    // private: 같은 클래스 내에서만 접근 가능
    // 클래스는 public과 default만 가능

    public int a1;
    protected int a2;
    int a3;
    private int a4;

    public void method1(){
        System.out.println(a4);
    }

}
