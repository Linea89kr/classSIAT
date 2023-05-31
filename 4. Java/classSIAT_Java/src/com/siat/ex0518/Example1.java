package com.siat.ex0518;

import com.siat.ex0518.class1.Bean1;

public class Example1 {
    public static void main(String[] args) {
        Bean1 bean1 = new Bean1();
        bean1.setA(12);
        bean1.setB("Rainy");

        System.out.println("a = " + bean1.getA());
        System.out.println("b = " + bean1.getB());

        Bean1 bean2 = new Bean1(13, "I hope Friday comes soon.");

        System.out.println("a = " + bean2.getA());
        System.out.println("b = " + bean2.getB());

        Bean1 bean3 = new Bean1();

        System.out.println("a = " + bean3.getA());
        System.out.println("b = " + bean3.getB());

    }
}
