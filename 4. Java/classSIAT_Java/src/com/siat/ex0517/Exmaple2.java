package com.siat.ex0517;


public class Exmaple2 {

    public int a = 1;
    // heap

    public void method1() {
        System.out.println(a);
//        System.out.println(this.a); 가 생략된 것.
        // method is stored in stack
    }

    //static => class method
    public static final int b = 2;

    public static void main(String[] args) {
//        Exmaple2 ex01 = new Exmaple2;
//        System.out.println(ex01.a);
//        System.out.println(Exmaple2.b);
        new Exmaple2().method1();
    }
}
