var number1, number2;

number1 = 1;
number2 = 10;

function sum(number1, number2) {
    //...
    //...
    return number1 + number2;
}

function verifyIfNumberIsGreaterThan10(number) {
    if (number >= 10) return 'Number is greater or equal than 10';
    else return 'Number is not greater than 10'
}

console.log(verifyIfNumberIsGreaterThan10(2))
console.log(verifyIfNumberIsGreaterThan10(11))
console.log(verifyIfNumberIsGreaterThan10(10))

