package com.java.ex01.class1;

public class Util {
    public <T> Box<T> getBoxing(T t) {
        Box<T> box = new Box<>();
        box.setI(t);
        return box;
    }
}
