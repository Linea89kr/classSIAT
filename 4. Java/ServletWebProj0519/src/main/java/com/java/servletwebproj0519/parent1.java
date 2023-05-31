package com.java.servletwebproj0519;

public class parent1 extends parent2 {
    public parent1(int pa1){
        this.pa1 = pa1;
    }
    public int pa1;
    public String pb1;

    public void parent1method1(){
        System.out.println("parent1method1");
    }
    public void parent1method2(){
        System.out.println("parent1method2");
    }

    public void parent2Method2(){
        System.out.println("parent2method1");
    }
}
