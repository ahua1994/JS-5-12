let num1, num2, num3;

while (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    num1 = parseInt(prompt("Enter first number: \n(reset upon failure)"));
    num2 = parseInt(prompt("Enter second number: \n(reset upon failure)"));
    num3 = parseInt(prompt("Enter third number: \n(reset upon failure)"));
}

let product = num1 * num2 * num3;

console.log(
    product > 0
        ? `Product is ${product}, sign is \"+\"`
        : `Product is ${product}, sign is \"-\"`
);
