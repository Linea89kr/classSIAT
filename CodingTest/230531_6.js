
function solution(){

    let num_list = [3,4,5,2,1]
    let sumall1 = num_list.reduce((acc,cur) => acc+cur)
    let sumallpow1 = Math.pow(sumall1,2)
    let multipleall1 = num_list.reduce((acc,cur) => acc*cur)
    let Binarynum = 0;

    sumallpow1 > multipleall1 ? Binarynum = 1 : Binarynum = 0;

    // if (sumallpow1 > multipleall1){
    //     Binarynum = 1;
    // } else{
    //     Binarynum = 0;
    // }
    console.log(Binarynum)
}
solution()


// Code for submit.
// function solution(num_list) {
//     // 다 더해 보기
//     let sumall1 = [...num_list].reduce((acc,cur) => (acc+cur))
//     // 그걸 제곱 걸어보기
//     let sumallpow1 = Math.pow(sumall1,2)
//
//     // 다 곱해보기
//     let multipleall1 = [...num_list].reduce((acc,cur) => acc*cur)
//
//     // 리턴 값 초기화
//     let Binarynum = 0;
//
//     //  원소들의 합의 제곱 > 원소들의 곱 = 1
//     //  원소들의 합의 제곱 < 원소들의 곱 = 0
//
//     // 로직 압축
//     return sumallpow1 > multipleall1 ? Binarynum = 1 : Binarynum = 0;
//
//     // if (sumallpow1 > multipleall1){
//     //     Binarynum = 1;
//     // } else{
//     //     Binarynum = 0;
//     // }
//     // return Binarynum;
// }