let num;

while (isNaN(num)) {
    num = parseInt(prompt("Enter A Valid Number: "));
}

console.log(
    num <= 100 && num >= 50
        ? `${num} is within 50 - 100`
        : `${num} is not within 50 - 100`
);
