package com.siat.class1;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME) // 어노테이션 정보를 언제까지 유지할 것인가?
public @interface PrintAnnotation {
    String value() default "-";
    int number() default 15;
}
