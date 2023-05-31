package com.siat.ex0523;

public class exmaple1 {
    @SampleAnnotation1(value = "pig",elem1 = "abc", elem2 = 3)
    int al = 3;

    @SampleAnnotation1(value = "caw", elem1 = "abc")
    String a2 ="abc";

    @SampleAnnotation1(value = "duck")
    String a3 = "opq";

    public void method1(){}
    public void method2(){}
}
