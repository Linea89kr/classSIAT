package com.java.servletwebprj0525;

import com.java.class1.Member;

import java.util.HashSet;
import java.util.Set;
import java.util.Iterator;

public class Example5 {
    public static void main(String[] args) {
    Member member1 = new Member("1", "John", 20);
    System.out.println(member1.hashCode());


    Set<String> set1 = new HashSet<>();
    set1.add("Java");
    set1.add("ava");
    set1.add("word");
    set1.add("chars");
    set1.add("blah");

    System.out.println(set1);

        System.out.println(set1.contains("Java"));
        System.out.println("---------------------------");
        System.out.println(set1.add("Python"));
        System.out.println(set1.add("JavaScript"));

        System.out.println(set1);

        System.out.println("Java".hashCode());
        System.out.println("Java".hashCode());

        Member member2 = new Member("1", "John", 20);

        System.out.println(member1.hashCode());
        System.out.println(member2.hashCode());

        System.out.println("---------------------------");

        Set<Number> set2 = new HashSet<>();

        set2.add(new Member("1", "John", 20).hashCode());
        set2.add(new Member("2", "CJ", 23).hashCode());
        set2.add(new Member("1", "John", 20).hashCode());

        System.out.println(set2.size());

        System.out.println("---------------------------");

        //# 1

        Iterator<String> itl1 = set1.iterator();
        while (itl1.hasNext()){
            System.out.println(itl1.next());
        }

        //# 2

//        String[] arr1 = (String[])set1.toArray();
//        for (String string : arr1){
//            System.out.println(" " +string);
//        }

        // # 3
        for (String string : set1){
            System.out.println(" " +string);
        }
    }
}
