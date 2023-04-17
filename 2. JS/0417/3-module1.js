export const a = `hello!`

export function func1() {
    console.log(`이것은 func1의 결과`)
}

export class Rectangle {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    get area() {
        return this.calcArea();
    }
    calcArea(){
        return this.height * this.width
    }
}

console.log(`abcd`)

