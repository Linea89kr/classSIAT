import tw from "tailwind-styled-components"
import classNames from "classnames";

const StyledH1 = tw.h1`
${p => p.$attr?"text-red-200" : "text-red-600"}
text-xl underline bold`

// css
/*
* React에서 css 개발 시 2가지 개발 벙법이 존재하며 아래와 같다.
* => 인라인 스타일 적용
* - 인라인 형태로 스타일을 적용하는 방식이며 이 방식은 스타일 자체가 인라인으로 박혀 사용되므로 가급적 피한다.
* - 객체나 일반 문자열 형태로 스타일을 만들며 스타일 속성에 직접 작용한다.
* => CSS style 작성 후 Component 에서 css 파일 import
* - 이 방식은 css파일에 별도로 디자인을 개발하고 개발한 파일을 import를 통해 컴포넌트에 붙이는 방식이다.
* - 이 방식의 장점은 디자인과 코드를 나눌 수 있어 별도로 디자인을 가져간다는 장점이 있고 디자이너와의 협업이 쉽다는 것이다.
* - 다만 이 방식의 단점은 다른 컴포넌트의 선택지에 그대로 영향을 미친다는 단점이 존재한다.
* => css-module 방식
* 위의 css 파일으 이용한 방식의 보완 버전
* 기존의 다른 선택지에도 css가 먹힌다는 단점을 보완하여, 해당 컴포넌트에만 디자인을 적용하기 위해 사용되는 방식
* - 이런 식으로 사용할 경우 디자이너와의 협업, 그리고 컴포넌트의 독립성 둘 다 챙길 수 있다.
* */

// css framework
/*
* - 기초 전통적인 css를 사용하는 방식의 단점은 생산속도가 느리고 컴포넌트 단위의 분리가 힘들며 구문이 장황하여 유지보수 관리가 어렵다는 점이다.
* - 다만 이후에 css 확장이 등장하게 되면서 일부 이러한 단점들을 해결하는 듯 했으나, 이후 추가로 등장한 스펙으로 인해 러닝 커브의 증가와 스펙의 난독화만 남는
* 상황이 빈번하게 발생하였다.
* - 또한 개발자 입장에서 퍼블리셔와의 협업이 자주 있던 것도 아니라서, 프론트앤드 개발자들이 실제 디자인까지 전부 하는 경우가 상당히 많이 발생하였고,
* 이를 통해 개발자들이 쉽고 간단하게 디자인을 할 수 있는 방법들이 고안되게 되었다.
* */
// tailwindcss
/*
* class 속성 키워드를 통해 디자인을 하는 방식의 css framework
* 여러 css framework가 등장했지만 근 최근에 등장하게 된 css framework이며 국내 모 대기업들의 사용으로 인해 서서히 주목받게 된 css framework.
* - classname에 간단한 키워드 만으로 디자인이 가능하다는 장점이 있으며, 디자인을 쉽고 편하며 빠르게 할 수 있다는 장점이 있다.
* 단점으로는 className이 더러워지며 해당 키워드를 전부 알기까지의 러닝커브가 상당히 가파르다는 점이다.
* 다만 기존의 css와 구문이 거의 비슷하게 배치가 되며, 기존 css와의 호환이 잘 되며 배우게 되ㅕㄴ 가독성이 좋아 쓰기 좋다는 장점이 있고, 이로 인해 유행을 탔다.
* 현재 퍼블리셔가 없는 개발 현장에서 빠른 css 개발을 위해 사용을 하는 경우가 많다.
*
* */
// Styled-Components
/**/

function Comp5(){

    const sat = "600"
    return(
        <div>
            <StyledH1>Hi there!</StyledH1>
            <h1 className={classNames
            ("text-9xl", {"underline":false}, "bold", {[`text-red-${sat}`]:true})}>Howdy Y'all!</h1>
        </div>
    )
}

export default Comp5