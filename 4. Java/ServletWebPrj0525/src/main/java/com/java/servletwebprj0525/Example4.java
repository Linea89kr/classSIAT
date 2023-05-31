package com.java.servletwebprj0525;
import com.java.class1.Member;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Example4 {
    public static void main(String[] args) {

        List<Member> list1 = Arrays.asList(
                new Member("id1", "Hong", 3),
                new Member("id2", "Choi", 41),
                new Member("id3", "Roger", 29),
                new Member("id4", "Kelly", 12),
                new Member("id5", "Do", 7),
                new Member("id5", "Do", 7)
        );
        ArrayList<Member> list2 = new ArrayList<>(list1);

        for (Member member : list1){
            if (member.getAge() < 35) {
                list2.add(member);
            }
    }
        for (Member member : list2){
            System.out.println(member);
        }
        System.out.println("--------------------------------------------");

        System.out.println(list2.get(4).equals(list2.get(5)));
    }
}
