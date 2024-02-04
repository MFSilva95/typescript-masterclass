interface Person{
    name : string;
    age : number;
    
}
const personOne: Person ={name:'Cat', age:22};
var people: Person[] = [
    {name:'Ana', age: 21},
    {name : 'Diogo', age: 32},
    {name:'Nathan', age: 28},
    personOne
]; 

function printPersonInfo(person: Person):void{
    console.log(`${person.name} is ${person.age} years old.`);
}
printPersonInfo({name:'Ana',age: 21});


function sumAges(people : Person[]): number{
    return people.reduce((sum, person) => sum + person.age, 0);
}

console.log(sumAges(people));
let things = [1, true, "wrong"];

// type aliases
type Address = [string, string, number];
var addresses: [Address, Address, Address] =[
    ['Porto', 'Rua do Cubo', 12],
    ['Braga', 'Largo da Fonte', 22],
    ['Guimarães', 'Rua da PEdra', 321]
];
function getAddress(addresses:Address[]): Address{
    const randomIndex = Math.floor(Math.random()*addresses.length);

    return addresses[randomIndex];
}

const randomAddress: Address = getAddress(addresses);
console.log(randomAddress);


// union types

let someId: number|null;
type Id = number|string;


// ######## SECOND PART ##############

// extending interfaces

interface HasFormatter {
    format(): string;
}

interface Bill extends HasFormatter{
    id: string | number,
    amount: number,
    server: string
}

const user = {
    id:1,
    format(): string {
        return `This user has an id of ${this.id}`
    }
}

const bill = {
    id:2,
    amount:50,
    server: 'Pedro',
    format(): string{
        return `Bill with id ${this.id} has ${this.amount} to pay!`
    }
}

function printFormatted(val: HasFormatter): void {
    console.log(val.format());
}

function printBill(bill:Bill): void{
    console.log('server name is', bill.server);
    console.log(bill.format());
}

printFormatted(user);
printFormatted(bill);

printBill(bill);