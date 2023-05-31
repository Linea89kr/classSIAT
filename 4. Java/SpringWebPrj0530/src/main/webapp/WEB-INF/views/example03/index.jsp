<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
<h1>JSP example</h1>
<h1>response basic example</h1>
<h2>1st example</h2>
<a href="example03/test1?data1=100&data2=200">test1</a>
<hr>
<h2>2nd example</h2>
<form action="example03/test2" method="post">
    <label for="data3">data3 :</label><input id="data3" name="data3"><br>
    <label for="data4">data4 :</label><input id="data4" name="data4"><br>
    <label>
        <input type="checkbox" name="data5" value="300">data55 300
        <input type="checkbox" name="data5" value="400">data55 400<br>
    </label>
    <button type="submit">test2 post</button>
</form>
<hr>
<h2>3rd example</h2>
<a href="example03/test3">test3</a>
<hr>
<h2>4th example</h2>
<a href="example03/test3">test3</a>
<hr>
<h2>5th example</h2>
<form action="example03/test5" method="post">
    <label for="data5">data3 :</label><input id="data5" name="data5"><br>
    <label for="data6">data4 :</label><input id="data6" name="data6"><br>
    <label>
        <input type="checkbox" name="data77" value="300">data77 300
        <input type="checkbox" name="data77" value="400">data77 400<br>
    </label>
    <button type="submit">test5 post</button>
</form>
</body>
<%--
전체적인 Spring web의 흐름
Spring Web은 실제 요청이 들어오면 아래와 같은 객체들을 통해 사용자에 대한 요청과 응답의 처리를 하게 된다

DispatcherServlet: 사용자가 가장 먼저 접근하게 되는 객체로 사용자의 요청을 가장 먼저 받아들이고 서버에서 처리한 비즈니스 로직에 대한 결과 값 및 응답을 패킹 하여 보낼 때 처리하는 클래스이다. 대부분의 객체는 이 DispatcherServlet과 통신을 하며 사용자의 요청과 응답을 처리한다.

Handler Mapping: 사용자의 요청이 들어올 경우 사용자가 보낸 path 및 query 정보를 통해 어떤 메서드를 요청했는가 찾을 경우 Handler Mapping 객체를 거치게 된다.
보통 Handler Mapping 객체의 경우 Controller에서 정의한 @GetMapping, @PostMapping 등의 url 매핑 정보를 통해 메서드와 클래스 정보를 검색한다

Controller: 실제 사용자가 요청한 요청 값에 대한 처리를 하는 비즈니스 로직 클래스들의 통로가 되는 클래스
여기서 이 클래스에는 사용자가 정의한 요청과 응답에 대한 기본적인 스펙 및 데이터에 대한 응답 처리 정보와 비즈니스 로직 정보가 이 곳에 들어간다.
비즈니스 로직 정보가 많아질 경우 다른 클래스를 별도로 두어 처리하도록 설계할 수 있다.

view resolver: Controller의 응답을 받아 처리할 시 사용자가 응답한 정보를 바탕으로 어떤 페이지를 호출하는지에 대한 검색을 담당하는 모듈
이 모듈을 통해 사용자에게 응답할 페이지를 찾을 수 있는 실제 경로를 리턴 한다.

view: 실제 사용자가 보게 될 페이지. .jsp, .html 등사용자가 직접적으로 마주치게 될 SSR 페이지를 사용자에게 직접 전송하게 되는데 이때 view resolver에서 처리한 페이지의 경로를 통해 해당 페이지를 찾아 사용자에게 전송한다.


// url mapper
url mapping은 @Controller 클래스에서 정의되며 다음과 같은 어노테이션을 통해 정의가 가능하다.

@RequestMapping: 모든 method 타입의 url 매핑을 정의할 때 사용하는 어노테이션

클래스에서 해당 어노테이션 정의가 가능하고 메서드에서도 해당 어노테이션의 정의가 가능하다.

이 어노테이션에는 method라는 엘리먼트가 존재하는데 method를 통해 GET, POST, PUT, PATCH, DELETE, OPTION 등의 속성으로 정의하여 사용자의 요청을 받을 수 있다.

또한 복수 개의 method 정의가 필요할 경우 @RequestMapping 사용이 가능하다.

@GetMapping, @PostMapping, @PutMapping, @PatchMapping, @DeleteMapping: 위의 @RequestMapping의 숏컷 버전

기존의 메서드를 따로 정의하여 처리하는 것을 아예 어노테이션으로 처리할 때 이와 같은 방식을 사용할 수 있다.


// WebRequest
스프링에서 사용하는 HttpServletRequest의 확장형

기존의 Servlet에서 제공하던 기능을 확장해 Spring에서 가공하여 사용하기 위한 객체
그만큼 기존의 Servlet에서 제공하는 객체보다 더 많은 기능을 제공한다.

Spring의 모든 요청의 가장 핵심적인 기능이 담겨있는 객체이기도 하다.

하지만 이 객체를 직접적으로 사용하는 일은 없으며 Spring 컨테이너에서 우리가 만든 요청을 가공할 때 이 객체를 통해 가공해서 더 직관적이고 편리하게 사용 가능하도록 기능을 제공하는 역할을 한다.
//Request 관련 주요 어노테이션
@PathVariable : url path에서 제공하고 있는 데이터를 임의의 변수 혹은 객체에 뽑아서 사용할 경우 사용하는 어노테이션
              해당 어노테이션을 통해 우리가 지정한 path에서 값을 직접 접근해 사용할 수 있는 것은 물론 우리가 원하는 임의의 타입으로 형변환까지 가능하다.

@RequestParam: 기존 httpServletRequest에서 .getParameter로 요청하던 메서드의 어노테이션 버전
이 어노테이션을 통해 우리가 접근하고자 하는 form date의 파라미터에 접근하여 임의의 변수 혹은 객체에 삽입이 가능하다.
또한, 타입에 대한 자동 변환도 제공하며 defaultValue에 대한 설정 및 required에 대한 설정도 지원한다.

@ModelAttribute: 객체에 매핑 된 필드의 이름을 통해 요청받은 데이터를 매핑하여 dto 객체로 처리할 경우 사용하는 지원 어노테이션. 입력한 데이터의 이름을 지정하면 해당 이름과 동일한 필드에 자동 주입이 가능하며 객체 째로 핸들링이 가능하다.
그래서 다른 의미로 커맨드 객체라고 불리기도 하며 이 어노테이션을 받은 객체를 통해 객체 째로 매핑 주입, 응답 후 접근 가능, 전처리, 후처리 등 다양한 방법으로 접근 사용이 가능하다.
@ModelAttribute는 생략이 가능하다.

응답 주요 객체
Model : 기존의 HttpServletRequest는 상당히 무겁고 사용하기 번거로웠던 반면 Spring에서는 Model이라는 객체를 도입하여 단점을 해결. Model은 기존 객체보다 경량화 되어 있으며 request를 통해 setAttribute로 데이터를 받아 사용하는 데이터 전송 역할을 대신 담당한다. Model에서는 해당 데이터를 객체에 받아 처리할 때 addAttribute라는 메서드를 활용해 영역 객체에 데이터를 받을 수 있다.

ModelAndView : 기존 Model에서 View에 대한 접근 기능까지 있는 객체.
기존 Model과는 달리 데이터에 대한 접근을 addObject로 처리하고 view에 대한 접근을 setViewName을 통해 추가적으로 지원한다 . 생각보다 쓰기 번거로워 자주 사용하지는 않는다.

--%>
</html>