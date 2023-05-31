<%@ page import="com.java.DTO.SampleDTO1" %><%--
  Created by IntelliJ IDEA.
  User: kevin
  Date: 2023/05/26
  Time: 9:49 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
//String str1 = "abc";

request.setCharacterEncoding("UTF-8");
request.setAttribute("str1", "abcd");

session.setAttribute("str3", "xyz");
// request가 ssession보다 우선한다.
    //request ssestion application 의 우선순위를 갖는다.
String str1 = (String)request.getAttribute("str2");

request.setAttribute("dto", new SampleDTO1(1, "aaa"));

//SampleDTO1 dto = (SampleDTO1)request.getAttribute("dto");


%>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h1><%=str1%></h1>
<h1>${str1}</h1>
<h1>${dto.num}</h1>
<h1>${sessionScope.str3}</h1>
<h1>${sessionScope.str3+3}</h1>
</body>
</html>
