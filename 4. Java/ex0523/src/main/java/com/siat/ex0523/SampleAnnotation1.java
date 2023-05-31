package com.siat.ex0523;

import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

@Target({ElementType.FIELD, ElementType.METHOD})
public @interface SampleAnnotation1 {
    String value();
    String elem1() default  "xyz";
    int elem2() default  3;
}
