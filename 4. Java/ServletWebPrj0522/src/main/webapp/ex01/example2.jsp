<%--
  Created by IntelliJ IDEA.
  User: kevin
  Date: 2023/05/22
  Time: 12:58 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
request.setCharacterEncoding("UTF-8");
String str1 = request.getParameter("str1");
String str2 = request.getParameter("str2");
%>

<html>
<head>
    <title>Title</title>
</head>
<body>
<h1>Here's example2 page</h1>
<jsp:include page="example3.jsp" flush="true"></jsp:include>
<h3><%=str1%></h3>
<h3><%=str2%></h3>
</body>
</html>
