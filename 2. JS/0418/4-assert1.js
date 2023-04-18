const assert = require("assert")
let v1=10;
let v2=10;
let v3=20;
let v4 = "10";
assert(v1 == v2)
console.log(`${v1}과 ${v2}는 같습니다.`)
assert(v1==v3)
console.log(`${v1}과 ${v3}는 같습니다.`)
assert(v1==v4)
console.log(`${v1}과 ${v4}는 같습니다.`)