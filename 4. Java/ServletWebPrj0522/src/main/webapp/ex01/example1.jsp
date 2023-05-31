<%--
  Created by IntelliJ IDEA.
  User: kevin
  Date: 2023/05/22
  Time: 12:57 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String str1 = "This is str1";
    String str2 = "This is str2:";
    String str3 = "abcd";
%>
<html>
<head>
    <title>Title</title>
</head>
<body>
<jsp:forward page="example2.jsp">
    <jsp:param name="str1" value="<%=str1%>"/>
    <jsp:param name="str2" value="<%=str2%>"/>
    <jsp:param name="str3" value="<%=str3%>"/>
</jsp:forward>
</body>
</html>
