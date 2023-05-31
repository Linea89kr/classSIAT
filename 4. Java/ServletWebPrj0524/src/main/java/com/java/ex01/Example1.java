package com.java.ex01;

import com.java.ex01.class1.Box;
import com.java.ex01.class1.Product1;
import com.java.ex01.class1.Sender;

public class Example1 {
    public Example1() {
    Sender sd = new Sender();
    Box<Integer> box1 = sd.sendBox();
    System.out.println(box1.getI()+10);

    Product1<String,Integer> pd1 = new Product1<>();
    pd1.setT("num1");
    pd1.setM(123);
    System.out.println("name : "+pd1.getT()+       "num : "+pd1.getM());
}

    public static void main(String[] args) {
        Box<Integer> box1 = new Box<Integer>();
        box1.setI(10);
        System.out.println(box1.getI());

        Box<String> box2 = new Box<String>();
        box2.setI(box2.getI());
    }
}
