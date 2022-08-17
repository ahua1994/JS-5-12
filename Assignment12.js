let num1, num2, operand;

while (isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt("Enter first number: \n(reset upon failure)"));
    num2 = parseInt(prompt("Enter second number: \n(reset upon failure)"));
}

while (operand != "+" && operand != "-" && operand != "*" && operand != "/") {
    operand = prompt("Enter '+', '-', '*' or '/': ");
}

console.log(
    operand == "+"
        ? `${num1} + ${num2} = ${num1 + num2}`
        : operand == "-"
        ? `${num1} - ${num2} = ${num1 - num2}`
        : operand == "*"
        ? `${num1} * ${num2} = ${num1 * num2}`
        : `${num1} / ${num2} = ${num1 / num2}`
);
