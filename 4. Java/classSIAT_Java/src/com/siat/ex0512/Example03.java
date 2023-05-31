package com.siat.ex0512;

import java.math.BigInteger;

public class Example03 {
    public static void main(String[] args) {
        /* Variable type
        * - 자바에서는 각 자료형 타입에 따라 변수형을 정의한다.
        * - 변수형은 크게 정수형, 실수형, 불리언형, 문자형, 문자열형이 있다.
        * 정수형 : byte, short, int, long
        * 실수형 : float, double => 기본형은 double
        * 불리언형 : boolean
        * 문자형 : char
        * 문자열형 : String
        *
        * note : 자바의 변수는 재선언은 불가능하고, 재할당만 가능하다.
        * */

        /* rule of variable declaration
        * - 변수명은 숫자로 시작할 수 없다.
        * - 변수명은 특수문자를 제외한 문자, 숫자, 언더바(_)로만 구성할 수 있다.
        * - 변수명은 자바의 예약어를 사용할 수 없다.
        * - 변수명은 대소문자를 구분한다.
        * - 변수명은 맥락에 맞게 작성한다.
        * - 변수명은 카멜케이스(camelCase)로 작성한다.
        * - 변수명은 한글로 작성할 수 있지만, 권장하지 않는다.
        *
        * JS에서는 변수명을 선언할 때 var, let, const를 사용했지만, 자바에서는 변수명 앞에 타입을 명시한다.
        * */

        byte i1 = 3, i9 = 127; // 1byte
        short i2 = 4, i10= 2^15-1; // 2byte
        int i3 = 5; //2^31-1 4byte
        long i4 = 6; // 2^63-1 8byte

        float f1 = 3.14f; // 4byte
        double f2 = 3.14; // 8byte

        boolean b1 = true;

        char c1 = 'A';
        String s1 = "Hello";

        //String은 참조형.
        //wrapper class
        // - 기존에 있던 기본형 타입을 참조형으로 바꿔 쓰기 위해 존재하는 클래스
        // - 래퍼 클래스에 있는 많은 기능들을 활용할 수 있다.

        Integer k15 = 3;
        Long k6 = k15.longValue();
        Long k61 = 222L;
        Float k7 = 0.123f;
        Double wf2 = 1.234;

        Boolean wb1 = true;

        Character wc1 = '갹';

        // 형 변환 (casting)
        // 자동 형 변환
        // - 작은 타입에서 큰 타입으로 데이터 타입 이동이 일어날 때 큰 타입쪽으로 자동으로 타입 변환이 일어나는 것.

        int m1 = 123;
        double n1 = m1;

        // 강제 형 변환
        // - 큰 타입에서 작은 타입으로 데이터 타입 이동이 일어날 때 작은 타입쪽으로 강제적으로 타입 변환이 일어나는 것.
        // - 이 강제 형 변환 시 데이터의 손실이 발생할 수 있다.
        // - 강제 형 변환 시 데이터의 손실을 최소화하기 위해선 데이터 손실이 발생하지 않는 범위 내에서 강제 형 변환을 해야 한다.

        double d2 = 12.34;
        int c2=(int)d2;
        System.out.println(c2);

        //자동 형변환 순서는 byte -> short -> int -> long -> float -> double

        BigInteger bigInteger = new BigInteger("1234567890123456789012345678901234567890");

        // char
        // char -> int = unicode
        // - 문자형은 2byte의 크기를 가지며, 유니코드를 사용한다.
        // - 유니코드는 전 세계의 모든 문자를 표현하기 위해 만들어진 코드이다.
        // - 유니코드는 16진수로 표현한다.

        // Java에서의 변수의 생존 범위는 무조건 블록 scope. (JS에서는 함수 scope)
    }
}
