/*console.log('Manmohan');
const fs= require('fs')
fs.writeFileSync('hello.txt','Manmohan Boyina')*/

//Spread Operator(...) : Spread operator helps to pull out all the values from the array

const h=['Manmohan','Manu']
const h1=[...h]
console.log(h1)

//Rest(...) : Rest has same syntac as spread. The place where we use makes the difference. Rest is used to merge the values

const res = (...args)=>{
    return args;
};
console.log(res(1,2,3));
console.log(res(1,2,3,4));

//... in array -> Spread
///... in function arguments -> Rest

const person={
    name:'Manmohan',
    age:'29'
};
const namm=(personData)=>{
    console.log(personData.name);
};

//alternate for above function -> Destructuring
//Destructuring : To keep it crisp, it is simply breaking the values in object/array assigning them to different variables

const nab=({age})=>{
    console.log(age);
};

const {name,age}=person;
console.log(name,age);
nab(person)
namm(person);
console.log(person.name);

//Template Literal
 let num1=9;
 let num2=5;
 let result=num1+num2;
 console.log(`The addition of ${num1} and ${num2} is ${result}`);
