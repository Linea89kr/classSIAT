package com.siat.class1;

public class Service {
    @PrintAnnotation
    public void method1(){
        System.out.println("Service's method1");
    }
    @PrintAnnotation
    public void method2("*"){
        System.out.println("Service's method2");
    }
    @PrintAnnotation(value = "#", number = 20)
    public void method3(){
        System.out.println("Service's method3");
    }
}
