<%@ page language="java" contentType="text/html;"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>$Title$</title>
</head>
<body>
<%--<form action="example04/result" method="post">--%>
<%--    <label for="username">:</label><input type="text" name="username" id="username" value="${userDataDTO.username}"><br>--%>
<%--    <label for="userid">:</label><input type="text" name="userid" id="userid" value="${userDataDTO.userid}"><br>--%>
<%--    <label for="userpw">:</label><input type="text" name="userpw" id="userpw" value="${userDataDTO.userpassword}"><br>--%>
<%--    <label for="userpostcode">:</label><input type="text" name="userpostcode" id="userpostcode" value="${userDataDTO.userpostcode}"><br>--%>
<%--    <label for="userAddress1">:</label><input type="text" name="userAddress1" id="userAddress1" value="${userDataDTO.useraddress2}"><br>--%>
<%--    <label for="userAddress2">:</label><input type="text" name="userAddress2" id="userAddress2" value="${userDataDTO.useraddress2}"><br>--%>
<%--</form>--%>

<%--@elvariable id="userDataDTO" type="java"--%>
<form:form action="example04/result" method="post" modelAttribute="userData">
    <form:label path="username">name : </form:label><form:input path="username" id="username"/><br>
    <form:label path="userid">id : </form:label><form:input path="userid" id="userid"/><br>
    <form:label path="userpassword">password : </form:label><form:password path="userpassword" id="userpassword" showPassword="true"/><br>
    <form:label path="userpostcode">postcode : </form:label><form:input path="userpostcode" id="userpostcode"/><br>
    <form:label path="useraddress1">address1 : </form:label><form:input path="useraddress1" id="useraddress1"/><br>
    <form:label path="useraddress2">address2 : </form:label><form:input path="useraddress2" id="useraddress2"/><br>
    <input type="submit" value="전송">
</form:form>
</body>
</html>