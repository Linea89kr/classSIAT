package com.siat.ex0517;

import com.siat.ex0517.class1.StaticClass1;

// 자바 프로그래밍 언어의 특징

/*
* 객체 지향 프로그래밍 언어
* - 객체 지향이라는 것은 객체를 기반으로 프로그램이 하는 언어를 말하며 이와 같은 특징을 지닌 언어를 객체 지향 언어라고 한다.
* - 자바의 경우 객체를 통해 모든 로직을 생성, 관리 및 동작시키며 이를 통해 자바는 가장 대표적인 객체지향 프로그래밍 언어라고 할 수 있다.
* - 자바의 로직은 실제 객체를 통해 배포가 되며 모든 로직은 메서드 기반으로 동작한다. 메서드 밖에서는 로직이 생존할 수 없는 구조이므로
* 반드시 메서드를 통해서만 로직 생성과 실행이 가능하다.
* */

// 객체의 구조
/*
* - 객체는 크게 속성과 기능으로 정의한다.
* - 속성 : 해당 객체가 가지고 있는 값을 이야기한다. (색깔, 양, 상수등)
* - 기능 : 해당 객체가 실제 할 수 있는 동작을 이야기 한다. (그리기, 일기, 쓰기, 동작하기, 합치기, 등등)
* - 객체에는 해당 객체 특유의 속성을 이용해서 기능을 실행하며, 객체ㅏ다의 속성은 각기 다를 수 있다.
* - 자바 프로그래밍 언어에서 이러한 속성을 필드, 혹은 멤버변수라고 칭하며, 기능을 메서드라 부른다.
* - 필드 선언 방법 : [접근제한자] [타입] [변수명] = [변수값]
* - 메서드 선언 방법 : [접근제한자] [리턴타입] [메서드명]([매개변수]) { [메서드 실행 로직] })}
* */

// JVM, JRE, JDK
/*
* - JRE (Java Runtime Environment) : 자바 생행 환경. 자바가 어떤 OS에 있든 상관 없이 자바 소스 코드를
* 동일하게 동작시키는 환경을 제공한다.
* - JDL (Java Development Kit) : 자바 개발에 필요한 모든 자원을 담고 이쓴ㄴ 모듈, 해당 모듀른 어떤 자바 JDK를 쓰느냐에
* 따라 스펙의 차이가 약간씩 있을 수 있읜 보통 동일한 모듈들을 제공한다.
* - JVM (Java Virtual Machine) : 자바 가상 머신. 자바 자바가 구동될 때 필요한 메모리의 생성 맡 관리, 실제 런타임 환경에서의 실행 동작 관리를
* 자바 환경에 필요한 전반적인 메모리의 관리를 담당하는 가상 머신, 이 머신을 통해 OS의 특정 영역에 메모리를 잡아 자바를 구동시키며 안정적인 자바의 실행이 가능하도록 만든다.
*/

//JVM의 구조
/*
* - JVM은 다섯게의 메모리 구조로 나뉘게 되며 각각 class 영역, heap 영역, pc register, native 메모리 영역으로 나뉜다.
* - class 메모리 영역 : 자바 프로그램이 런타임 여역에서 메모리에 적제가 될 때 프록래머가 만들어 두었던 모든 클래스, 메서드 스펙,
* static 필드 등 로직 실행에 필요한 모든 자원이 들어가는 곳이다. 우리가 흔히들 이야기 하는 엔트리 포인트 (public tatic void main)
* 의 경우 여기의 Class 메모리 영역에 적제된다. 다른 이름으로는 메서드 메모리 영역 혹은 스테틱 메모리 영역으로 불리기돟 ㅏㄴ다.
* - Heap 영역 : 클래스를 통해 만들어진 인스턴스의 주소값이 이 메모리 영역에 적제가 된다. 해당 메모리 내에서는 우리가 new로 선언한 모든 인스턴스의 메모리
* 주소값 및 로직을 실행할 stack의 메모리 주소 링크, 그리고 우리가 해당 인스턴스에서 사용ㅎㄹ 필드 값들이 여기에 들어간다 heap영역은 JVM의 heap 옵저버를
* 통해서 실시간으로 관리가 되며 만약 해당 인스턴스가 사용되지 않을 경우 GC(Garvage Collector)에 의해 메모리에서 삭제된다.
* - Stack 영역 : 인스턴스를 통해 로직을 실행할 경우 해당 로직이 실행되는 장소이며 로직들의 정보를 Class 메모리 영역에서 가져와 Stack 형태의 프로세스를 통해 해당 로직을 실행하고 메모릐르 비운다. 위의 두 메모리보다 메모리를 반환하는 속도가 가장 빠르다.
* - PC Register : 스레드를 동기화 시키거나 스레드간의 통신이 필요할 경우 사용하는 메모리 영역
* - native 메모리 영역 : 서로 다른 언어 혹은 서로 다른 시스템간의 메모리 동기화를 위해 사용하는 메모리 영역, 임베디드 영역에서 활발하게 사용되지만 web에서는 딱히 잘 사용되지 않는다.
*
*
*  */

public class Example1 {
    public static void main(String[] args) {
        StaticClass1 cls1 = new StaticClass1();
        System.out.println(cls1.a);
        cls1.method1();

//        System.out.println(cls1.b);
//        cls1.method2();

        System.out.println(StaticClass1.b);
        StaticClass1.method2();

        System.out.println("--------------------");

        StaticClass1 cls2 = new StaticClass1();
        StaticClass1.b = "def";

        System.out.println(StaticClass1.b);
        System.out.println(StaticClass1.b);
    }
}
