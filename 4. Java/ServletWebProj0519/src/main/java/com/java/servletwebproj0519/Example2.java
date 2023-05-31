package com.java.servletwebproj0519;

import com.java.class1.Example2_3;

public class Example2 extends Example2_3 {

    public Example2(){
        Example2_2 ex2 = new Example2_2();
        System.out.println(ex2.a1);
        System.out.println(ex2.a2);
        System.out.println(ex2.a3);
        // ex2.a4 = 4; // private 변수는 같은 클래스 내에서만 접근 가능

//        Example2_3 ex3 = new Example2_3();
//        System.out.println(ex3.b1);
//        System.out.println(ex3.b2);
//        System.out.println(ex3.b3);
        // ex3.b4 = 4; // private 변수는 같은 클래스 내에서만 접근 가능

        System.out.println(b1);
        System.out.println(b2);
        // System.out.println(b3); 같은 패키지가 아니니, 접근 불가.
        // ex3.b4 = 4; // private 변수는 같은 클래스 내에서만 접근 가능

    }

    public static void main(String[] args) {
        new Example2();
    }
}
