<%--
  Created by IntelliJ IDEA.
  User: kevin
  Date: 2023/05/18
  Time: 2:57 PM
  To change this template use File | Settings | File Templates.
--%>

<%
    //set incodeing type
    request.setCharacterEncoding("UTF-8");
    String id = request.getParameter("id");
    String password = request.getParameter("password");

    //str == str => str.equals
    if(id.equals("aaaa")){
        //sendRedirect
        //teach user where to move
        response.sendRedirect("./response2.jsp");
    }else if(id.equals("bbbb")){
        pageContext.forward("./response2.jsp");
    }
%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h1>Here's response.jsp.</h1>
<h3>Hello <%=id%>!</h3>
<h3>Your password is <%=password%>
</h3>
</body>
</html>
