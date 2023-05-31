<%--
  Created by IntelliJ IDEA.
  User: kevin
  Date: 2023/05/23
  Time: 9:51 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <style>
        section {
            display: flex;
            padding: 20px;
            background-color: #666666;
            align-items: center;
            justify-content: center;
        }
        .snip {
            font-family: 'Raleway', Arial, sans-serif;
            position: relative;
            overflow: hidden;
            margin: 10px;
            min-width: 230px;
            max-width: 315px;
            width: 100%;
            background: #ffffff;
            text-align: left;
            color: #000000;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
            font-size: 16px;
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-perspective: 20em;
            perspective: 20em;
        }

        .snip * {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-transition: all 0.3s ease-out;
            transition: all 0.3s ease-out;
        }

        .snip img {
            max-width: 100%;
            vertical-align: top;
            position: relative;
        }

        .snip .add-to-cart {
            position: absolute;
            top: 0;
            right: 0;
            padding-right: 10px;
            color: #ffffff;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 0.9em;
            opacity: 0;
            background-color: #409ad5;
            -webkit-transform: rotateX(-90deg);
            transform: rotateX(-90deg);
            -webkit-transform-origin: 100% 0;
            -ms-transform-origin: 100% 0;
            transform-origin: 100% 0;
        }

        .snip .add-to-cart i {
            display: inline-block;
            margin-right: 10px;
            width: 40px;
            line-height: 40px;
            text-align: center;
            background-color: #164666;
            color: #ffffff;
            font-size: 1.4em;
        }

        .snip div {
            padding: 20px;
        }

        .snip h3, .snip p {
            margin: 0;
        }

        .snip h3 {
            font-size: 1.5em;
            font-weight: 700;
            margin-bottom: 10px;
            text-transform: uppercase;
        }

        .snip p {
            font-size: 0.9em;
            letter-spacing: 1px;
            font-weight: 400;
            height: 50px;
        }

        .snip .price {
            font-weight: 500;
            font-size: 1.5em;
            line-height: 48px;
            letter-spacing: 1px;
        }

        .snip .price s {
            margin-right: 5px;
            opacity: 0.5;
            font-size: 0.9em;
        }

        .snip a {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }

        .snip:hover .add-to-cart, .snip.hover .add-to-cart {
            opacity: 1;
            -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
        }

        .snip:hover .add-to-cart i, .snip.hover .add-to-cart i {
            background-color: #2980b9;
        }
    </style>
</head>
<body>
<section>
    <jsp:include page="page2.jsp">
        <jsp:param name="proImg" value="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample85.jpg"></jsp:param>
        <jsp:param name="name" value="Pudol Doux"></jsp:param>
        <jsp:param name="desc" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit."></jsp:param>
        <jsp:param name="price" value="$20.00"></jsp:param>
        <jsp:param name="discount" value="$19.00"/>
        <jsp:param name="link" value="1"/>
    </jsp:include>
    <jsp:include page="page2.jsp">
        <jsp:param name="proImg" value="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample96.jpg"></jsp:param>
        <jsp:param name="name" value="Pudol Doux"></jsp:param>
        <jsp:param name="desc" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit."></jsp:param>
        <jsp:param name="price" value="$20.00"></jsp:param>
        <jsp:param name="discount" value="$19.00"/>
        <jsp:param name="link" value="2"/>
    </jsp:include>
    <jsp:include page="page2.jsp">
        <jsp:param name="proImg" value="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample92.jpg"></jsp:param>
        <jsp:param name="name" value="Pudol Doux"></jsp:param>
        <jsp:param name="desc" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit."></jsp:param>
        <jsp:param name="price" value="$20.00"></jsp:param>
        <jsp:param name="discount" value="$19.00"/>
        <jsp:param name="link" value="3"/>
    </jsp:include>
</section>
</body>
</html>