<%--
  Created by IntelliJ IDEA.
  User: kevin
  Date: 2023/05/23
  Time: 10:32 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%
    request.setCharacterEncoding("UTF-8");
    String proImg = request.getParameter("proImg");
    String name = request.getParameter("name");
    String desc = request.getParameter("desc");
%>
<html>
<head>
    <title>Title</title>
    <style>
        body {
            background: url('<%=proImg%>') no-repeat center;
            background-size: cover;
        }

        h1, p {
            color: #f1f1f1;
        }
    </style>
</head>
<body>
    <h1><%=name%></h1>>
    <p><%=desc%></p>
</body>
</html>
