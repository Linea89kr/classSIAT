package com.siat.ex0523;

import com.siat.class1.Product;
import com.siat.class1.ProductImpl1;
import com.siat.class1.ProductImpl2;

import java.util.Random;

// 설계와 추상화
/*
* - 설계를 통해 전체적인 그림을 그리고 추상화를 통해 대략적인 스펙을 정의하는 기능
* - 일반적으로 순차지향 프로그래밍에서는 이러한 추상개념이 존재하지 않았으며 함수형 프로그래밍 언어나 스크립트 코드의 경우도 마찬가지로 추상에 대한 개념은 존재하지 않는다.
* - 프로그램이 복잡해지고 구성 기능의 다각화가 이루어지면서 해당 기능을 설계하는 설계 객체가 점점 부각되기 시작하는데 객체 지향형 언어를 기준으로 등장하기 시작함
* - 자바 또한 이러한 추상화를 제공하므올써 프로그래머들의 공동 개발을 용이하게 하고더 나아가 빠른 속도의 개발을 할 수 있도록 도와준다.
*/
// 추상 클래스
/*
* - 추상 클래스: 부분 추상 클래스
* => 일반적인 클래스와 동일하나 클래스 접근제한자의 뒤쪽과 추상 메서드의 접근제한자 뒤쪽에 [abstract]라는 키워드를 붙여서 추상메서드라는 표시를 한다.
* => 추상 메서드는 기능이 존재하지 않고 단순히 해당 기능에 대한 스펙(접근제한자, 리턴타입, 메서드명, 매개변수)만 가지고 있다.
* => 관련 클래스를 상속받은 클래스에 강제로 오버라이딩하여 선언하게 하는 기능을 가짐.
* - 인터페이스 : 완전 추상 클래스
* => 클래스 선언부에 class 대신 interface라는 키워드가 들어간다.
* => 기능이 저으이된 메서드는 디폴트 메서드와 스태틱 메서드 외에는 존재하지 않으며 일반 메서드가 없고 전부 추상메서드만 존재하기 때문에 완전 추상 클래스라고 부르기도 한다.
* => 인터페이스로는 인스턴스 선언이 불가능하며 반드시 상속을 받은 클래스를 선언하여 사용해야 한다.
* => 인터페이스는 일반 클래스와는 달리 다중 상속이 가능하며 인터페이스를 일반 클래스에서 상속받을 시 implements 키워드를 사용한다.
* => 인터페이스는 완전 추상을 통해 해당 클래스의 스펙만을 제공할 뿐 그 이외의 역할을 하지는 않는다.
* => 다형성에서 하나의 타입으로 여러 개의 객체를 선언 시 해당 타입이 되는 것이 바로 인터페이스이다.
* */
// 어노테이션
/*
* - 일반적으로 메모의 기능, 혹은 알림의 기능을 가진 메타데이터
* 키와 값의 쌍으로 이루어진 알림 데이터라 볼 수 있지만 Retention을 통해 해당 어노테이션을 어디까지 가져갈 수 있는지를 결정할 수 있게 됨에 따라,
*  기존보다 더 다양한 일을 하게 됨.
* 프레임워크나 자사 솔루션에서 해당 어노테이션의 동작 정의를 함으로써 사용자들이 어노테이션을 통한 기능 개발이 가능하게끔 할 수 있음.
* 어노테이션은 인터페이스 계열로써 일반적인 기능을 갖고 있지 않음, 다만 일반 클래스에서 관련 어노테이션을 읽어 메서드의 로직 전 후에 전처리, 후처리를 진행할 수 있다.
* 기존의 공통 기능을 어노테이션을 통해 구현하고 핵심 기능을 별도 개발하게끔 Spring에서 지원해주고 있으며 이를 어노테이션을 통해 지원하고 있음.
*
*
* */


public class Example3 {

    private Product pd;
    public Example3(){
        Random ran = new Random();

        setPd(ran.nextBoolean()? new ProductImpl1() : new ProductImpl2());

        pd.method1();
        pd.method2();
    }

    public void setPd(Product pd) {
        this.pd = pd;
    }

    public static void main(String[] args) {
        new Example3();
    }
}