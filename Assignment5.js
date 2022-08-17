let num1, num2;

while (isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt("Enter first number: \n(reset upon failure)"));
    num2 = parseInt(prompt("Enter second number: \n(reset upon failure)"));
}

console.log(
    num1 > num2
        ? `${num1} is greater`
        : num1 == num2
        ? "They are equal"
        : `${num2} is greater`
);
