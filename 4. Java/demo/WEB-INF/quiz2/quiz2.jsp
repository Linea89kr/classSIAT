<%--
  Created by IntelliJ IDEA.
  User: kevin
  Date: 2023/05/22
  Time: 11:11 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<style>
  ul{
    list-style: none;
  }
</style>
<body>
<form action="#">
  <fieldset>
    <legend>Move page</legend>
    <ul>
      <li><select name="page" id="page"></select></li>
      <option value="1" selected>1page</option>
      <option value="2">2page</option>
      <option value="3">3page</option>
      <li>
        <button type="button" id="move"></button>
      </li>
    </ul>
  </fieldset>
</form>

</body>
</html>
<script type="text/javascript">
  document.getElementById("move").addEventListener("click",function () {
  let num = document.getElementById("page").value;
  if(num==="1"){
    location.href="result1.jsp";
  }else if(num==="2"){
    location.href="result2.jsp";
  }else if(num==="3"){
    location.href="result3.jsp";
  }});
</script>