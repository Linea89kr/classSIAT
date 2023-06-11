

// 홀짝에 따라 다른 값 반환하기
/*양의 정수 n이 매개변수로 주어질 때,
n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고
n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.*/

const n = 7;

function solution(n){

    let numcheck = n%2
    let result = 0;

    
    if (numcheck == 0){
        for (let i = 0; i <= n; i++) {
            if (i%2 == 0 ){
                result += i**2
                console.log(result)
            }
        }
    }else if (numcheck == 1){
        for (let i = 0; i <= n; i++) {
            if (i % 2 !== 0) {
                result += i
                console.log(result)
            }
        }
    }
}

solution(n);