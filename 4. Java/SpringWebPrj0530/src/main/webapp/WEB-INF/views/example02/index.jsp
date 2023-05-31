<%@ page language="java" contentType="text/html;"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>$Title$</title>
</head>
<body>
<h1>Request Response Parameter</h1>
<hr>
<h2>1st example</h2>
<a href="example02/test1?data1=100&data2=200&data3=300&data3=400">test1 get</a>
<hr>
<h2>2nd example</h2>
<form method="post" action="example02/test2">
    <label for="data1">data1 :</label><input id="data1" name="data1"><br>
    <label for="data2">data2 :</label><input id="data2" name="data2"><br>
    <label>
    <input type="checkbox" name="data3" value="300">data3 300
    <input type="checkbox" name="data3" value="400">data3 400<br>
    </label>
    <button>test2 post</button>
    <hr>
    <h1>3rd example</h1>
    <a href="example02/test3/100/200/300">test3 get</a>
    <hr>
    <h1>4th example</h1>
    <a href="example02/test4/100,200,300">test4 get</a>
    <hr>
    <h1>5th example</h1>
    <a href="example02/test5?data1=100&data2=200&data3=300&data3=400">test5 get</a>
    <hr>
    <h1>6th example</h1>
    <a href="example02/test6?data1=100">test6 get</a>
    <hr>
    <h1>7th example</h1>
    <a href="example02/test7?data1=100&data2=200&data3=300&data3=400">test7 get</a>
<%--    이렇게 맵, 리스트로 데이터를 가져오는 건 지양할 것
        서버 역시 벨리데이션 체크를 돌리는데, 맵, 리스트로 밸리데이션 체크를 하는 것에는 많은 공수가 듬.
        그리고 직관적이지 않아서 유지보수가 어려움.
        엔티티로 변환되었을 때, 맵으로 들어오면 Get으로 받아다 넣어줘야 하는데, 프론트에서 100% 맞는 값을 넣는다는 보장이 없음.
--%>
    <hr>
    <h1>8th example</h1>
    <a href="example02/test7?data1=100&data2=200&data3=300&data3=400">test7 get</a>
    <hr>
    <h1>9th example</h1>
    <form method="post" action="example02/test9">
        <label for="data3">data1 :</label><input id="data3" name="data3"><br>
        <label for="data4">data2 :</label><input id="data4" name="data4"><br>
        <label>
            <input type="checkbox" name="data3" value="300">data3 300
            <input type="checkbox" name="data3" value="400">data3 400<br>
        </label>
        <button>test2 post</button>
</form>
</body>
</html>