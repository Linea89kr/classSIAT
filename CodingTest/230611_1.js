
// n의 배수
/*
* 정수 num과 n이 매개 변수로 주어질 때,
* num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.
* */

function solution(num, n) {
    let checknum = num%n;
    if(checknum == 0){
        return 1
    }else if (checknum ==1){
        return 0
    } else {
        return 0
    }
    var answer = 0;
    return answer;
}