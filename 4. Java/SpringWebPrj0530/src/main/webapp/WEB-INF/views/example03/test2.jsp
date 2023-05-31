<%@ page language="java" contentType="text/html;"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>$Title$</title>
</head>
<body>
<p>Form1: ${param.data3}</p>
<p>Form2: ${param.data4}</p>
<p>data3[0]: ${paramValues.data5[0]}</p>
<p>data3[1]: ${paramValues.data5[1]}</p>
<c:forEach var="item" items="${paramValues.data5}">
    <p>data3: ${item}</p>
</c:forEach>
</body>
</html>