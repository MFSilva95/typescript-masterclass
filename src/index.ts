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


//13