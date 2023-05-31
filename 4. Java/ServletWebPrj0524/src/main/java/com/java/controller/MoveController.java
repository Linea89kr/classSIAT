package com.java.controller;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import jakarta.servlet.http.Cookie;

import java.io.IOException;

@WebServlet("/MoveController")
public class MoveController extends HttpServlet {
    private static final long serialVersionUID = 1L;

public MoveController(){
        super();
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
// create cookie
        Cookie cookie = new Cookie("name", "KJR");
        // set cookie age
        cookie.setMaxAge(600);
        // add cookie to response
        response.addCookie(cookie);


        request.setCharacterEncoding("UTF-8");
        RequestDispatcher rdp = request.getRequestDispatcher("result2.jsp");
        rdp.forward(request, response);
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}