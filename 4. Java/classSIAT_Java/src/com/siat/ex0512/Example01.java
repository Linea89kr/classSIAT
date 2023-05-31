package com.siat.ex0512;

public class Example01 {
    public static void main(String[] args) {
        //정수형
        System.out.println(42);
        System.out.println(-11);
        //실수형
        System.out.println(3.14);
        System.out.println(-11.123);
        System.out.println(5.12e+3);
        //불리언
        System.out.println(true);
        System.out.println(false);
        //문자형
        System.out.println('A');
        System.out.println('가');
        //문자열형
        System.out.println("Hello");
        System.out.println("안녕하세요");
        System.out.println("A");

        //출력 후 개행
        System.out.println("print and newline");
        System.out.print("print, but not newline");
        System.out.println("print again");
        System.out.printf("print %d and %f", 1, 2.0);
        // 결합연산자를 활용한 출력
        System.out.println("print " + 1 + " and " + 2.0);
    }
}
