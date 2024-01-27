interface Person{
    name : string;
    age : number;
    
}
function printPersonInfo(person: Person){
    console.log(`${person.name} is ${person.age} years old.`);
}
printPersonInfo({name:'Ana',age: 21});