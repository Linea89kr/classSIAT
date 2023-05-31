package com.java.ex01.class1;

public class Sender {
    public Box<Integer> sendBox() {
        Box<Integer> box1= new Box<Integer>();
        box1.setI(10);
        return box1;
    }

}
