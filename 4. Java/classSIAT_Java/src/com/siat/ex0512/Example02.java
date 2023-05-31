package com.siat.ex0512;

import java.util.Scanner;

public class Example02 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        // print number
        System.out.println("Enter a number:"+scan.nextInt());
        System.out.println("Enter a double: "+scan.nextDouble());
        System.out.println("Enter a boolean: "+scan.nextBoolean());
        System.out.println("Enter a word: "+scan.next());
        scan.nextLine();
        System.out.println("Enter a string: "+scan.nextLine());
    }
}
