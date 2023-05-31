<%--
  Created by IntelliJ IDEA.
  User: kevin
  Date: 2023/05/23
  Time: 9:51 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    request.setCharacterEncoding("UTF-8");
    String proImg = request.getParameter("proImg");
    String name = request.getParameter("name");
    String desc = request.getParameter("desc");
    String price = request.getParameter("price");
    String discount = request.getParameter("discount");
    String link = request.getParameter("link");
%>
<html>
<head>
    <title>Title</title>
</head>
<body>
<div class="snip">
    <img src="<%=proImg%>" alt="">
    <div class="add-to-cart">
        <i class="ion-android-add"></i>
        <span>Add to Cart</span>
    </div>
    <div>
        <h3><%=name%></h3>
        <p><%=desc%>
        </p>
        <div class="price">
            <s><%=price%>
            </s><%=discount%>
        </div>
        <a href="page3.jsp?value=<%=link%>"></a>
    </div>
</div>
</body>
</html>
