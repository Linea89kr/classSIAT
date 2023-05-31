package com.siat.ex0515;

import com.siat.ex0515.class1.Car1;

public class Example5 {
    public static void main(String[] args) {
    Car1 car1 = new Car1();
        System.out.println(car1);
        System.out.println(car1.color);
        System.out.println(car1.fuel);
        car1.turnOn();
        car1.putExcel();
        car1.putBreak();

        Car1 car2 = new Car1();
        System.out.println(car2);
        car2.turnOn();
        car2.putExcel();
        System.out.println(car2.color);
        System.out.println(car2.fuel);

        Car1 car3 = car2;
        car3.putExcel();
        System.out.println(car3.color);
        System.out.println(car3.fuel);
    }
}
