package com.java.servletwebprj0525;

import java.util.ArrayList;
import java.util.Collections;

public class ArrayList1 {
    public static void main(String[] args) {
        ArrayList<Integer> list1 = new ArrayList<>();
        list1.add(10);
        list1.add(2);
        list1.add(8);
        list1.add(6);
        list1.add(3);

        System.out.println("List1 = "+list1);
        System.out.println("Length of List1 = "+list1.size());

        System.out.println("--------------------------------------------");

        list1.add(8);
        System.out.println("List1 = "+list1);
        System.out.println("Length of List1 = "+list1.size());

        System.out.println("--------------------------------------------");

//        list1.remove(3);
        list1.remove(2);
        System.out.println("list1 : "+list1);
        System.out.println("Length of List1 = "+list1.size());

        System.out.println("--------------------------------------------");

        Collections.sort(list1);
        System.out.println("list1 : "+list1);
        System.out.println("Length of List1 = "+list1.size());

    }
}
