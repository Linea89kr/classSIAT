<%--
  Created by IntelliJ IDEA.
  User: kevin
  Date: 2023/05/23
  Time: 11:17 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
//request.setCharacterEncoding("UTF-8");
//String value = request.getParameter("value");
    String id = (String)session.getAttribute("id");
    String pw = (String)session.getAttribute("pw");
%>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h1>Welcome!</h1>
<h3><%=id%>!</h3>
<h3>Your pw is  : <%=pw%></h3>
</body>
</html>
