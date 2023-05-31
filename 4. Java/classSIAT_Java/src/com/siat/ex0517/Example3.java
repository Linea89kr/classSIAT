package com.siat.ex0517;

import com.siat.ex0517.class1.StaticClass1;
import com.siat.ex0517.class1.bean1;

// bean 객체
// DTO (Data Type Object)

public class Example3 {
    private final int a = 1;
    private final String s = "abc";
    private final Integer c = 10;
    public StaticClass1 SC1 = new StaticClass1();

    // no return
    public void method1(){
        System.out.println("It's already called.");
    }

    // no return, but has arguments
    public void method2(int a){
        System.out.println("it got arguments"+" "+a);
    }
    public void method3(int a, int s){
        System.out.println("it got arguments"+" "+(a+s));
    }
    public void method4(int ...a){
        System.out.println("it got arguments"+" "+(a[0]+a[1]+a[2]+a[3]));
    }


    public void add(int a){
        System.out.println("a="+a);
    }

    // If only return type exist

    public int method5(){
        return 5;
    }

    // bean object, bean class

    public void method6(bean1 bean){
        System.out.println(bean.getA());
        System.out.println(bean.getB());
        System.out.println(bean.getC());
    }

    // overloading
    // 1. argument의 개수가 다르다.
    // 2. argument의 type이 다르다.

    public void add(int a, int s){
        System.out.println("a="+a);
    }
    public void add(int a, int b, int c){
        System.out.println("a="+(a+b+c));
    }
    public void add(int a, String s){
        System.out.println("a+b"+(a + s));
    }
    public void add(String s, int a){
        System.out.println("a+B="+(a + s));
    }

    public static void main(String[] args) {
        Example3 ex01 = new Example3();
//        System.out.println(ex01.a);
//        System.out.println(ex01.s);
//        System.out.println(ex01.c);
//        ex01.add(3);

        ex01.method1();
        ex01.method2(3);
        ex01.method3(3,4);
        ex01.method4(1,2,3,4);

        ex01.add(1,2);
        ex01.add(1,2,3);

        ex01.add(1,"3");
        ex01.add("1",2);

        System.out.println("----------------");
        System.out.println(ex01.method5());


        System.out.println("----------------");
        bean1 bean = new bean1();
        bean.setA(1);
        bean.setB(2.0);
        bean.setC("3");
    }
}
