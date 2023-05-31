<%--
  Created by IntelliJ IDEA.
  User: kevin
  Date: 2023/05/23
  Time: 10:25 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
request.setCharacterEncoding("UTF-8");
  String value = request.getParameter("value");
String proImg="";
  String name="";
  String desc="";

  if(value.equals("1")){
    proImg = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample85.jpg";
    name = "AAA";
    desc = "AAA desc";
  }else if(value.equals("2")){
    proImg = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample96.jpg";
    name = "BBB";
    desc = "BBB desc";
  }else{
    proImg = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample92.jpg";
    name = "CCC";
    desc = "CCC desc";
  }
%>

<jsp:forward page="page4.jsp">
  <jsp:param name="proImg" value="<%=proImg%>"/>
  <jsp:param name="name" value="<%=name%>"/>
  <jsp:param name="desc" value="<%=desc%>"/>
</jsp:forward>