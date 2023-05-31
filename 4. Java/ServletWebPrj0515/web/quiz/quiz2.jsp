<%--
  Created by IntelliJ IDEA.
  User: kevin
  Date: 2023/05/15
  Time: 10:26 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String color1 = "color : blue";
    String color2 = "color : red";
    String color3 = "green";
%>
<html>
<head>
    <title>Title</title>
    <style>
        p {
        <%=color1%>
        }
    </style>
</head>
<body>
<p>word1</p>
<p>word2</p>
<p style="<%=color2%>">word3</p>
<p><font color="<%=color3%>">green words</font></p>
<p style="<%=color2%>">word3</p>

</body>
</html>
