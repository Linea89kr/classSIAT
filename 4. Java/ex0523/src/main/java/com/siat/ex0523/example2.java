package com.siat.ex0523;

import java.lang.reflect.Method;
import com.siat.class1.PrintAnnotation;
import com.siat.class1.Service;

public class example2{
    public static void main(String[] args) {
    //Service class로부터 받아오기
    Method[] declareMethods = Service.class.getDeclaredMethods();
    for(Method method : declareMethods){
        if(method.isAnnotationPresent(PrintAnnotation.class)){
            PrintAnnotation pa = method.getAnnotation(PrintAnnotation.class);
            for (int i = 0; i < pa.number(); i++){
                System.out.println(pa.value());
            }
            System.out.println();

            try{
                method.invoke(new Service());
            }catch (Exception e){
                System.out.println();
            }
        }
    }
}
}