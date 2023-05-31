package com.siat.controller;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/HelloController")

public class HelloController extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public HelloController(){
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("Here's the HelloController!");
        request.setCharacterEncoding("utf-8");
        String value = request.getParameter("value");
        response.getWriter().append("Served at: ").append(request.getContextPath());
        RequestDispatcher rdp = request.getRequestDispatcher("src/main/webapp/result1.jsp");
        rdp.forward(request, response);

        //send redirect
        response.sendRedirect(request.getContextPath()+"src/main/webapp/result1.jsp");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
