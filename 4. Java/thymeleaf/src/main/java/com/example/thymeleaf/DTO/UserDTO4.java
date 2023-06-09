package com.example.thymeleaf.DTO;

import java.util.List;

public class UserDTO4 {
    private String userName;
    private String userId;
    private String userPw;
    private String userPostcode;
    private String userAddress1;
    private String userAddress2;
    private List<String> states;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserPw() {
        return userPw;
    }

    public void setUserPw(String userPw) {
        this.userPw = userPw;
    }

    public String getUserPostcode() {
        return userPostcode;
    }

    public void setUserPostcode(String userPostcode) {
        this.userPostcode = userPostcode;
    }

    public String getUserAddress1() {
        return userAddress1;
    }

    public void setUserAddress1(String userAddress1) {
        this.userAddress1 = userAddress1;
    }

    public String getUserAddress2() {
        return userAddress2;
    }

    public void setUserAddress2(String userAddress2) {
        this.userAddress2 = userAddress2;
    }

    public List<String> getStates() {
        return states;
    }

    public void setStates(List<String> states) {
        this.states = states;
    }
}
