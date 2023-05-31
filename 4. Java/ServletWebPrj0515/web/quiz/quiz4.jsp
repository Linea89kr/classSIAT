<%--
  Created by IntelliJ IDEA.
  User: kevin
  Date: 2023/05/15
  Time: 10:59 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
String locale = "odd";
String bgColor = "blue";
String fontColor = "white";
%>
<html>
<head>
    <title>Title</title>
  <style>
    #container{
      text-align: center;
      color:#2b2b2b;
    }
    table{
      width: 200px;
      margin: 0 auto;
      border-collapse: collapse;
    }
    td{
      text-align: left;
      padding:10px;
      padding-left:20px;
    }
    table tr:nth-child(<%=locale%>){
      background-color: <%=bgColor%>;
      color: <%=fontColor%>
    }
  </style>
</head>
<body>
<div id="container">
  <h1>foods good for health</h1>
  <table border="1">
  <tr><td>bluebarry</td></tr>
    <tr><td>poorun juice</td></tr>
    <tr><td>salary</td></tr>
    <tr><td>oister</td></tr>
    <tr><td>redbarry</td></tr>
    <tr><td>Yellowbarry</td></tr>
    <tr><td>purplebarry</td></tr>
    <tr><td>rainbowbarry</td></tr>
    <tr><td>limebarry</td></tr>
    <tr><td>lemonbarry</td></tr>
    <tr><td>Grapefruitbarry</td></tr>

  </table>

</div>>
</body>
</html>
