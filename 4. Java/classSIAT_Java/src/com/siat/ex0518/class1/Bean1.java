package com.siat.ex0518.class1;

public class Bean1 {
    public int a;
    public String b;

    public Bean1() {
        this(3, "Three");
        System.out.println("Default constructor");
        method1();
        method2();
    }

    public Bean1(int a, String b) {
        this.a = a;
        this.b = b;
    }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public String getB() {
        return b;
    }

    public void setB(String b) {
        this.b = b;
    }

    public void method1(){
        System.out.println("Call method1");
//      constructor -> method : OK
//      method -> constructor : NO
//      -> can't find memory address.
//      There's no way to call constructor in method.
    }

    public void method2(){
        System.out.println("Call method2");
        method1();
        // 가리키는 대상이 하나 뿐이면 this 생략 가능
    }
}
