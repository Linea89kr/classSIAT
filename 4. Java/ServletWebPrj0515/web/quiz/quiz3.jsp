<%--
  Created by IntelliJ IDEA.
  User: kevin
  Date: 2023/05/15
  Time: 10:50 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
String media = "./media/audio.mp3";
//    String media = "/ServletWebPrj0515/quiz/media/audio.mp3";
%>
<html>
<head>
    <title>Title</title>
</head>
<body>
<audio autoplay controls>
  <source src="<%=media%>" type="audio/mp3">
</audio>
</body>
</html>
