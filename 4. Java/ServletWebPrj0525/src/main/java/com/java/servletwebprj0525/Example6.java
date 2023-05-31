package com.java.servletwebprj0525;

import java.util.HashMap;
import java.util.Map;

// Collection
/*
* - 자바에서 제공하는 자료에 대한 저장을 어떻게 할지 제공하는 기능의 집합
* - 기존의 배열의 한계를 극복하기 위해 나온 자료구조 라이브러리의 집합.
* - 배열의 정적인 움직임에서 나아가 동적으로 배열의 크기를 채워주는 List, 중복된 값의 제거 및 값의 여부를 빠르게 색인하기 위해 만들어진 Set,
* 키를 통한 값의 접근 및 해당 값에 사용, 색인, 삭제, 수정등을 할 수 있게 해주는 Map등이 이에 해당한다.
* - 사실상 현업에서는 List와 Map이 많이 활용되고 Set은 잘 활용되지 않는다.
* */

// List
/*
* - 값에 대한 중복을 허용하며, 인덱스를 통해 임의 접근이 가능하다.
* - 데이터에 대한 순서가 존재하며 데이터의 중복이 허용된다.
* - 동적 배열을 객체로 구현한 형태
* - 리스트의 값이 삭제되면 자동으로 크기가 줄어들고 리스트에 값이 추가되면 자동으로 크기가 늘어난다.
* - 리스트의 값이 줄거나 늘 시에 동적으로 해당 인덱스가 값에 맞춰서 매핑이 이루어지며 인덱스가 밀리거나 끌려가는 현상이 자연스레 방지된다.
* - 기존 배열의 크기 관리가 힘들었던 단점을 이런 식으로 보완을 할 수 있게 해줌으로써 최근 자바에서는 많이 사용하는 자료구조 라이브러리중 하나.
* - 데이터베이스의 색인된 로우들을 들고 올 경우 이 리스트를 많이 사용한다.
* */

// Set
/*
* - 데이터에 대한 중복을 허용하지 않으며 순서가 없다.
* - 값을 인덱스로 접근할 수 없으며 값에 대한 고유성을 유지시키는 콜렉션 라이브러리.
* - 값이 겹쳐지지 않기 때문에 만약 동일한 값을 삽입할 경우 해당 결과는 false로 처리되고 값을 드랍시킨다.
* - 값을 삭제하는 것은 가능하지만 해당 값에 대한 위치나 수정이 불가능하며 오로지 해당 값이 있는지 없는지만 편단 가능하다.
* - hashset이나 treeset의 경우 색인 속도가 매우 빨라 대용량의 데이터 색인 및 색인 유무를 검증하는 한정적인 곳에서만 사용이 가능하다.
* - Map도 키를 활용한 hash 혹은 tree의 지원이 되어서 굳이 쓸 필요가 없다면 가급적 Map으로 쓰는 것을 추천.
* */

// Map
/*
* - 키와 값의 쌍으로 이루어져 있는 콜렉션 라이브러리
* - 순서가 존재하지 않으며 값은 중복이 가능하지만 키는 중복이 불가능하다.
* - 같은 키로 다른 값을 넣을 경우 이전 값은 제거되고 새로운 값의 해당 키의 값으로 대체된다.
* - Map은 키와 값의 쌍으로 이루어져 있기 때문에 제네릭 타입이 두개가 필요하다.
* - 기존의 List와 Set을 섞어놓은 형태인 만큼 Key나 Value의 순회를 위해 해당 내용만 뽑아서 쓰는 메서드를 따로 호출하여 순회하여야 한다.
* - 두개의 값은 Entry로 뽕아서 사용이 가능하며 키와 값의 쌍으로 이루어진 콜렉션 Bean 형태를 가진다.
* - 자주 사용되는 형태로 키를 통한 특정 밧의 색인, input 데이터의 무검증 리시브등에 쓰인다.
*
*
* */




public class Example6 {
    public static void main(String[] args) {
        Map<Integer, String> map1 = new HashMap<>();
        map1.put(1, "java");
        map1.put(2, "jsp");
        map1.put(3, "servlet");

        System.out.println(map1);

        System.out.println(map1.keySet());
        System.out.println(map1.values());
        System.out.println(map1.put( 4, "spring"));

        for (Map.Entry<Integer,String> entry : map1.entrySet()){
            System.out.println(entry);
        }

        System.out.println("--------------------------------------------");
        System.out.println(map1.get(2));
        System.out.println("--------------------------------------------");

        map1.remove(2);
        System.out.println(map1);
        System.out.println("--------------------------------------------");

        map1.put(4, "rarara");
        System.out.println(map1);
    }
}
