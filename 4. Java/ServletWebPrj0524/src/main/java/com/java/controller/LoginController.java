package com.java.controller;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

@WebServlet("/LoginController")
public class LoginController extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public LoginController() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("Here's LoginController page");
        request.setCharacterEncoding("UTF-8");
        String id = request.getParameter("id");
        String pw = request.getParameter("pw");
        System.out.println("id: " + id + ", pw: " + pw);

        HttpSession session = request.getSession();

//        session.invalidate(); // 기존 세션을 무효화

        session.setAttribute("id", id);
        session.setAttribute("pw", pw);

        RequestDispatcher rdp = request.getRequestDispatcher("result1.jsp");
        rdp.forward(request, response);
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
