class Calculator {
  operations = {}; // All

  addMethod(name, operation) {
    if (this._checkIfString(name)) {
      if (typeof func === "function") {
        this.operations[name] = operation;
      }
      return "Operation is not a function";
    }
    return "Operation's name is not a string";
  }

  calculate(operation) {
    if (this._checkIfString(operation)) {
      let [number1, operator, number2] = operation.split(" ");
      return this.operations[operator](+number1, +number2);
    }
    return "Calculate operation is not a string";
  }

  _checkIfString(val) {
    return typeof val === "string" && val !== "" && val !== " ";
  }
}

let calculator = new Calculator();

calculator.addMethod("+", (a, b) => a + b);
calculator.addMethod("-", (a, b) => a - b);
calculator.addMethod("*", (a, b) => a * b);
calculator.addMethod("/", (a, b) =>
  b !== 0 ? a / b : "We cant divide by zero"
);
calculator.addMethod("**", (a, b) => a ** b);
calculator.addMethod("%", (a, b) => a % b);

console.log(calculator.calculate("230 + 15"));
console.log(calculator.calculate("50 - 10"));
console.log(calculator.calculate("2 * 3"));
console.log(calculator.calculate("21 / 7"));
console.log(calculator.calculate("21 / 0"));
console.log(calculator.calculate("2 ** 2"));
console.log(calculator.calculate("12 % 10"));
