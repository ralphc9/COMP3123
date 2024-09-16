//Example 1

const greeter = (myArray, counter) => {
    const greetText = 'Hello';

    for (const name of myArray) {
        console.log(`${greetText} ${name}`);
    }
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);


//Example 2

const capitalize = str => {
    const [firstChar, ...rest] = str;
    return `${firstChar.toUpperCase()}${rest.join('').toLowerCase()}`;
};

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));


//Example 3

const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map(color => {
    const [firstChar, ...rest] = color;
    return `${firstChar.toUpperCase()}${rest.join('').toLowerCase()}`;
});

console.log(capitalizedColors); // Output: ['Red', 'Green', 'Blue']


//Example 4

var values = [1,60,34,30,20,5]

const filterLessThan20 = values.filter(value => value >= 20);

console.log(filterLessThan20)


//Example 5

const array = [1, 2, 3, 4];

const calculateSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const calculateProduct = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(calculateSum);
console.log(calculateProduct);


//Example 6

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    details() {
        return `Model: ${this.model}, Year: ${this.year}`;
    }
}
class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
    info() {
        return `${super.details()}, Balance: $${this.balance}`;
    }
}
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());





