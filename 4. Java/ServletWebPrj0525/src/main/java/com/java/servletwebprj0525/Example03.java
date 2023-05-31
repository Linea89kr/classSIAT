package com.java.servletwebprj0525;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static java.util.Arrays.asList;

public class Example03 {
    public static void main(String[] args) {
        List<Integer> list1 = asList(6, 9, 3, 7 ,5);
        System.out.println("List = "+list1);

        List<Integer> list2 = Arrays.asList(1,2,3,4,5);
        System.out.println("List2 = "+list2);

        System.out.println("Print duplicated values in list"+list1.retainAll(list2));
        System.out.println("Print duplicated parts"+list1.subList(0,3));

        System.out.println("--------------------------------------------");

        list1.set(4, 10);
        System.out.println("List1 = "+list1);

        System.out.println("--------------------------------------------");

        for (Integer integer : list2) {
            System.out.println(" " + integer);

            System.out.println("--------------------------------------------");

            for (int i = 0; i < list2.size(); i++) {
                System.out.println(" " + list2.get(i));
            }
        }
    }
}
