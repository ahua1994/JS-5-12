let num1, num2;

while (isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt("Enter first number: \n(reset upon failure)"));
    num2 = parseInt(prompt("Enter second number: \n(reset upon failure)"));
}

console.log(
    Math.abs(100 - num1) <= Math.abs(100 - num2)
        ? `${num1} is closest to 100`
        : `${num2} is closest to 100`
);
