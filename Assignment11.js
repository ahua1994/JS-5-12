let input = prompt("Enter a day of the week: ");
let day = input.toLowerCase().trim();

switch (day) {
    case "monday":
        console.log(`${input} is a weekday.`);
        break;
    case "tuesday":
        console.log(`${input} is a weekday.`);
        break;
    case "wednesday":
        console.log(`${input} is a weekday.`);
        break;
    case "thursday":
        console.log(`${input} is a weekday.`);
        break;
    case "friday":
        console.log(`${input} is a weekday.`);
        break;
    default:
        console.log(`${input} is not a weekday.`);
}
