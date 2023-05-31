<%--
  Created by IntelliJ IDEA.
  User: kevin
  Date: 2023/05/22
  Time: 11:18 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <style>
        body {margin : 0;height : 100vh;}
        header {
            background-color : yellowgreen;
            color : #fff;
            text-align : center;
            height : 150px;
        }
        section { display:flex;}
        article, aside, nav {height :calc(100vh - 300px);}
        article { flex : 3; background-color : #eee; }
        aside { flex : 1; background-color : #ddd;}
        nav { flex : 1; background-color : #ccc;}
        footer {
            background-color : gray;
            color : #fff;
            height : 150px;
            text-align : center;
        }
        h1 {
            margin : 0;
        }
    </style>
</head>
<body>
<div class="container">
    <header>
        <h1>1 page</h1>
    </header>
    <section>
        <article>Article</article>
        <aside>Aside</aside>
        <nav>Nav</nav>
    </section>
    <footer>footer</footer>
</div>
</body>
</html>
