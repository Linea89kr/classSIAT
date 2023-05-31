<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>index</title>
</head>
<body>
    <h1>요청 응답 파라미터 예제</h1>
    <hr>
    <h2>첫번째 예제</h2>
    <a href="example02/test1?data1=100&data2=200&data3=300&data3=400">test1 get</a>
    <hr>
    <h2>두번째 예제</h2>
    <form action="example02/test2" method="post">
      <%-- (label[for="data$"]{data$ : }+input:text#data$[name="data$"]+br)*2 --%>
      <label for="data1">data1 : </label><input type="text" name="data1" id="data1"><br>
      <label for="data2">data2 : </label><input type="text" name="data2" id="data2"><br>
      <label>data3 : 
        <%-- input:checkbox[name="data3"]+br --%>
        <input type="checkbox" name="data3" value="300">data3 300
        <input type="checkbox" name="data3" value="400">data3 400<br>
      </label>
        <button>test2 post</button>
    </form>
    <hr>
    <h3>세번째 예제</h3>
    <a href="example02/test3/100/200/300">test3 get</a>
</body>
</html>