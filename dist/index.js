"use strict";
const personOne = { name: 'Cat', age: 22 };
var people = [
    { name: 'Ana', age: 21 },
    { name: 'Diogo', age: 32 },
    { name: 'Nathan', age: 28 },
    personOne
];
function printPersonInfo(person) {
    console.log(`${person.name} is ${person.age} years old.`);
}
printPersonInfo({ name: 'Ana', age: 21 });
function sumAges(people) {
    return people.reduce((sum, person) => sum + person.age, 0);
}
console.log(sumAges(people));
let things = [1, true, "wrong"];
var addresses = [
    ['Porto', 'Rua do Cubo', 12],
    ['Braga', 'Largo da Fonte', 22],
    ['Guimarães', 'Rua da PEdra', 321]
];
function getAddress(addresses) {
    const randomIndex = Math.floor(Math.random() * addresses.length);
    return addresses[randomIndex];
}
const randomAddress = getAddress(addresses);
console.log(randomAddress);
// union types
let someId;
const user = {
    id: 1,
    format() {
        return `This user has an id of ${this.id}`;
    }
};
const bill = {
    id: 2,
    amount: 50,
    server: 'Pedro',
    format() {
        return `Bill with id ${this.id} has ${this.amount} to pay!`;
    }
};
function printFormatted(val) {
    console.log(val.format());
}
function printBill(bill) {
    console.log('server name is', bill.server);
    console.log(bill.format());
}
printFormatted(user);
printFormatted(bill);
printBill(bill);
