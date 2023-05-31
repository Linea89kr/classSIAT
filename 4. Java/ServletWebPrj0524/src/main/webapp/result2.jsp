<%--
  Created by IntelliJ IDEA.
  User: kevin
  Date: 2023/05/24
  Time: 2:19 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    //http 프로토콜의 특징
    /*
    * stateless 하다. 즉 연결이 유지되지 않으며 연결이 끈허져있다.
    * 서버측에서는 클라이언트의 상태를 알 수 없으며 클라이언트 역시 서버 상태를 알 수가 없다.
    * http는 3 way handshake를 통해 연결이 이루어지며 당시 해당 상태에 대한 확인만 진행하며, 이후 이 둘 사이의 상태를 알 수 있는 방법이 없다.
    * */

    // 세션
    /*
    * - 서버와 클라이언트의 통신을 진행할 때 서버가 클라이언트의 상태를 알기 위해서 해당 상태를 잡아두는 것 (stateful하다고 표현한다)
    * - 이로써 서버는 유저의 상태를 명확하게 알 수 있으며 해당 유저에 대한 상태가 어떤지 서버 측에서 파악이 가능하다.
    * - 이를 위해 만들어진 객체가 session이며 session은 유저의 현재 상태를 메모리에 담아 관리하고 해당 유저에게 관련 데이터를 접근하게 할 수 있도록 쿠키로
    * jSSessionId를 만들어 값을 부여한다.
    * - JSESSIONID값을 갖고 있는 유저는 언제든 서버로 데이터 요청을 할 때 서버는 이 id를 통해 현재 유저의 상태를 파악할 수 있다.
    * - 또한 SESSION에 대한 데이터는 서버에서 관리가 이루어지므로 적정한 권한을 가진 사라이 아닐 경우 해당 데이터에 대한 내용을 볼 수 있는 방법은
    * 존재하지 않는다.
    * - 세션을 사용하는 것은 해당 웹의 보안성을 강화시키고 인가된 사용자의 앱 사용을 허가하는 한편, 인가되지 않은 사용자에 대한 접근을 통제할 수 있다는 장점을 갖고 있다.
    * - 다만 세션은 잘못 사용할 경우 메모리에 대한 과부하가 쉽게 일어날 수가 있으며 더 나아가 메모리 풀의 오버플로우로 인한 시스템 고장으로
    * 이어질 수 있으므로 주의할 것.
    * */
    // 쿠키
    /*
    * - 클라이언트 상에 담겨지는 데이터를 위해 사용되는 공간
    * - 쿠키는 해당 도메인과 통신할 때 요청 측에서 서버로 쿠키 데이터를 함께 실어 전송한다.
    * - 서버에서는 이 쿠키 값을 받아 처리하며 쿠키 또한 양이 많을 경우 서버 안에서 처리가 더 많아지고 트래픽 용량이 증가한다는 단점이 있다.
    * - 클라이언트와 서버에서의 Cookie 핸들링은 비슷하지만 하나 차이가 있다면 클라이언트의 Coockie는 delete와 같은 삭제 메서드를 통해 삭젝 가능하지만,
    * 서버에서는 마땅이 지울 수 있는 메서드가 존재하지 않으며 대신 MaxAge를 0으로 주어 간접적으로 삭제하는 것이 가능하다.
    * */
    // 내장 객체 생존 범위
    /*
    * - 각 jsp는 여러 내장객체를 가지고 있으며 해당 내장 객체들은 각각의 생존 범위가 존재한다.
    * => page: 페이지 이동 전,
    * => request : 다음 요청 전
    * => session : 클라이언트 종료 전
    * => application : 시스템 종료 전
    * 위의 내장객체 중 page는 현재 쓰이지 않고 있으며 request, session 정도가 자주 사용 된다.
    * applicationContext는 생존시강이 길다는 장점이 있지만 시스템이 꺼질 때 데이터에 대한 회수가 가능하므로 가급적 사용하는 것을 피할 것.
    * 위의 내장 객체들은 공통적으로 아래와 같은 메서드를 사용한다.
    * setAttribute("name", [value]) : 해당 이름의 값을 설정한다. 설정되는 값의 타입은 Object 형태의 무엇이든 가능하다.
    * getAttribute("name") : 해당 이름의 값을 리턴한다. 리턴 값의 타입은 Object이다.
    *
    * */

    String name = "";
    String value = "";
    Cookie[] cookies = request.getCookies();

    for(int i =0; i < cookies.length; i++){
        if(cookies[i].getName().equals("name")){
            name = cookies[i].getName();
            value = cookies[i].getValue();
        }
    }
%>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h1>Here's result2 page</h1>
<h2>name : <%=name%></h2>
<h2>name : <%=value%></h2>
</body>
</html>
