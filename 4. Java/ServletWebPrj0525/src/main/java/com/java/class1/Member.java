package com.java.class1;

public class Member {
    private String id;
    private String name;
    private int age;

    public Member(String id, String name, int age){
        super();
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
    public String toString(){
        return "Member [id=" + id + ", name=" + name + ", age=" + age + "]";
    }

    public int hashCode(){
        return toString().hashCode();
    }
}
