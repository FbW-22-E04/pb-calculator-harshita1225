class Calculator {
  constructor() {
    this.PI = 3.141592;
    this.E = 2.718281828459045;
  }

  //getter
  get pi() {
    return `PI (${this.PI})`;
  }

  get e() {
    return `Eulner's number (${this.E})`;
  }

  //methods
  ratio(x, y, width) {
    let widthRatio = width / x;
    let heightRatio = widthRatio * y;
    return `height is ${heightRatio} on ratio ${x}:${y}`;
  }
  percentage(x, y) {
    return (x / y) * 100;
  }

  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    return x / y;
  }

  modulation(x, y) {
    return x % y;
  }

  elevate(x, y) {
    return x ** y;
  }
  sqrt(x) {
    return Math.sqrt(x);
  }
}

const hjCalc = new Calculator();

console.log(hjCalc.add(2, 4));
console.log(hjCalc.ratio(3, 4, 600));
