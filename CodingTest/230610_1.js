// /*
// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다.
// 다항식을 계산할 때는 동류항끼리 계산해 정리합니다.
// 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때,
// 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요.
// 같은 식이라면 가장 짧은 수식을 return 합니다.
//  */
//
// /*
// * 받은 문장을 다 떼어 놓는다.
// * 정수랑 x가 붙은 값을 따로 저장해야 할 거 같은데...
// *
// * */
// function solution() {
//     // let polynomial = "3x + 7 + x"
//     let polynomial = "x + x + x"
//     let arr1 = polynomial.split(" ")
//     arr1.filter((v)=>v.includes("x"))
//     arr1.map((v)=>(v.split("x")[0]?v.split("x")[0]:1));
//     let num = arr1.filter((v)=>+v);
//     let arrx = arr1.filter((v)=>v.includes("x"))
//     let x = 0
//     let y = 0;
//     console.log(num)
//     console.log(arrx)
//     console.log(arr1)
//
// // 상수랑 x항을 구분해둠.
// // 3x와 x를 분리해서, 정수로 바꾸고 더하는 로직.
// // 만약 x가 "x"라면, 1을 반환 해주는 로직이 필요
// // 정수로 바뀌고 더해진 값을 다시 "4x"같은 형태로 바꿔서 돌려주는 로직.
//     // "3x + 7 + x"
//     // => "4x + 7"
//
//         arrx.forEach(v=>{
//             if(v == "x"){
//                     x +=1;
//             }else{
//                 x += +v.slice(0, v.length-1)
//                 console.log(x)
//             }
//
//             }
//         )
//
//         num.forEach(v=>{
//             if(v){
//             y = parseInt(v)
//             }
//         })
//
//
//     if(x!==0&&y!==0){
//         console.log(`${x}x + ${y}`)
//         return `${x}x + ${y}`
//     }
//     if(x!==0&&y==0){
//     console.log(`${x}`)
//     return `${x}x`
//     }
//     // // 분리해둔 arr을 forEach() 메서드를 이용해 하나씩 확인한다.
//     // arr1.forEach((n)=>{
//     //     if(arr1.includes("x")){
//     //         const str1 = n.replace("x", "")||"1";
//     //         console.log(str1)
//     //     }
//     // })
// }
// solution();
// 이 코드가 10x+0 예외 처리가 안되서 새로 짬.
function solution(polynomial) {

    const arr1 = polynomial.split(" ");
    let arrx = arr1
        .filter((v) => v.includes("x"))
        .map((v) => (v.split("x")[0] ? v.split("x")[0] : "1"));
    let num = arr1.filter((v) => +v);


    if (arrx.length && num.length) {
        arrx = arrx.reduce((a, b) => +a + +b);
        num = num.reduce((a, b) => +a + +b);
        if (arrx === "1") arrx = "";
        return `${arrx + ""}x + ${num + ""}`;
    } else {
        if (arrx.length) {
            arrx = arrx.reduce((a, b) => +a + +b);
            if (arrx === "1") arrx = "";
            return `${arrx + ""}x`;
        }
        if (num.length) {
            num = num.reduce((a, b) => +a + +b);
            return num + "";
        }
    }
}
/*
*  각 값별로 인덱스를 사용하기 위해서 배열(arr1)로 분산(.split(" ")).
 * polynomial[0] => 3,  arrPolynomial[0] => 3x
 *
 * 주어진 문자열은 "x"와 "num" 그리고 "+" 입니다
 * 단 사칙연산은 "+"만 존재 하므로 제외하고
 * x와 num를 분리.
 *
 *
 * arr1에서 "x"를 포함하는 값을 뽑아낸 배열을 생성.
 * .filter((v) => v.includes("x"))
 * arr1를 각 값을 "x"를 기준으로 나눈 배열로 바꾸고
 * 나눈 배열의 0번 인덱스를 리턴
 * 0번 인덱스가 ""이 아니라면 v.split("x")[0], ""이라면 "1"을 리턴.
 * .map((v) => (v.split("x")[0] ? v.split("x")[0] : "1"));
 *
 * num
 * arr1에서 숫자로 바꾸었을때 참인 값을 배열에 넣기.
 * arr1.filter((v) => +v)
 *
 * 만약 arrx.length와 num.length가 둘다 있다면
 * 두 배열 모두 배열의 값을 숫자로 바꾼 뒤 모두 더해주고
 * arrx = arrx.reduce((a, b) => +a + +b);
 * num = num.reduce((a, b) => +a + +b);
 * `${arrx + ""}x + ${num + ""}`를 리턴.
 * 만약 두 배열 중 하나만 존재할 경우,
 * 존재하는 배열의 값을 모두 숫자로 바꾼뒤 모두 더하고,
 * 형식에 맞게 리턴.
 * arrx가 1인 경우는 arrx를 ""로 리턴.
 */