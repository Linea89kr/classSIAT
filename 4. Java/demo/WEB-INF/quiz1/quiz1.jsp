<%--
  Created by IntelliJ IDEA.
  User: kevin
  Date: 2023/05/22
  Time: 10:00 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <style type="text/css">
        ul {
            list-style-type: none;
        }

        .btn {
            box-sizing: border-box;
            border: 2px solid red;
            border-radius: 0.4em;
            cursor: pointer;
            display: flex;
            align-self: center;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1;
            margin: 20px;
            padding: 1.2em 2.8em;
            text-decoration: none;
            text-align: center;
            text-transform: uppercase;
            font-family: 'Montserrat', sans-serif;
        }

        .btn:hover, .btn:focus {
            color: #FFFFFF;
        }

        .first{
            transition:box-shadow 300ms ease-in-out, color 300ms ease-in-out;
        }

        .first:hover{
            box-shadow: 0 0 40px 40px red inset;
        }
    </style>
</head>
<body>
<ul>
    <li>
        <button class="btn first" onclick="">Home</button>
    </li>
    <li>
        <button class="btn first" onclick="">Notice</button>
    </li>
    <li>
        <button class="btn first" onclick="">BBS</button>
    </li>
</ul>

<script>
    function movepage(str) {
        location.href = "result1.jsp?title=" + str;
    }
</script>

</body>
</html>
