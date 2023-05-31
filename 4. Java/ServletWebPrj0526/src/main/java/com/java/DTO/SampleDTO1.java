package com.java.DTO;

public class SampleDTO1 {
    private int num;
    private String str;

    public int getNum() {
        return num;
    }

    public SampleDTO1() {
    }

    public SampleDTO1(int num, String str) {
        this.num = num;
        this.str = str;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public String getStr() {
        return str;
    }

    public void setStr(String str) {
        this.str = str;
    }
}
