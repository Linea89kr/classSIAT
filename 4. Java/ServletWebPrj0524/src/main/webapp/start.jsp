<%--
  Created by IntelliJ IDEA.
  User: kevin
  Time: 11:31 AM
  Date: 2023/05/24
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="http://localhost:8080${pageContext.request.contextPath}/LoginController" method="post">
<label for="id">id : </label>
<input type="text" id="id" name="id">
<br>
<label for="pw">PW : </label>
<input type="password" name="pw" id="pw">
<button>Submit</button>
</form>
<a href="./result1.jsp">Move</a>
<hr />
<a href="http://localhost:8080${pageContext.request.contextPath}/MoveController" method="post">save cookie</a>
</body>
</html>
