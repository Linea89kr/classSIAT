package com.java.servletwebproj0519;

import com.java.class1.Crossdriver;
import com.java.class1.LinearDriver;
import com.java.class1.Driver1;

public class Example3 {
    public static void main(String[] args) {
        LinearDriver ld = new LinearDriver();
        ld.grabDriver();
        ld.screwDriver();

        Crossdriver cd = new Crossdriver();
        cd.grabDriver();
        cd.screwDriver();

        Driver1 dr1 = new LinearDriver();
        dr1.grabDriver();
        dr1.screwDriver();

        Driver1 dr2 = new Crossdriver();
        dr2.grabDriver();
        dr2.screwDriver();
    }
}
