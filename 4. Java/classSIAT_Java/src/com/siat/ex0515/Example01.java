package com.siat.ex0515;

public class Example01 {
    public static void main(String[] args) {
        int a=1;
        int b =2;
        System.out.println(a+b);
        System.out.println(a-b);
        System.out.println(a*b);
        System.out.println(a/b);
        System.out.println(a%b);

        // exception
        byte b1 = 3;
        byte b2 = 5;
        byte b3 = (byte)(b1 + b2);

        int c = 3;
        System.out.println(++c);
        System.out.println(c++);
        System.out.println(c);
        System.out.println(--c);
        System.out.println(c--);
        System.out.println(c);

        int d = 4;
//        d = d+2;
        d += 2;

        int e = 3;
        int f = 4;
        int g = 4;
        char aa='4';

        System.out.println(e>f);
        System.out.println(e<f);
        System.out.println(e>=f);
        System.out.println(e<=f);
        System.out.println(e==f);
        System.out.println(e!=f);

        System.out.println(f==g);
        System.out.println(f!=aa);

        System.out.println(true);
        System.out.println(false);
        System.out.println(false);

        System.out.println(false);
        System.out.println(true);
    }
}
