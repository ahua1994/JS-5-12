let num;

while (isNaN(num)) {
    num = parseInt(prompt("Enter A Valid Number: "));
}

console.log(num % 2 == 0 ? `${num} is even` : `${num} is odd`);
