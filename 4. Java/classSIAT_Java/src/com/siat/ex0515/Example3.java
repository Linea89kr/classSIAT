package com.siat.ex0515;

import java.util.Random;

public class Example3 {
    public static void main(String[] args) {
        double d1 = Math.random();
        System.out.println(d1);

        System.out.println("--------------");

        Random ran1 = new Random();
        System.out.println(ran1.nextDouble());

        System.out.println(ran1.nextDouble());
        System.out.println(ran1.nextInt());
        System.out.println(ran1.nextInt(10));
        System.out.println(ran1.nextBoolean());
    }
}
