// This is a single line comments
/* This is a multi
   line comments
*/

// var used to define variable in a specific scoop
var x = 5;
var y = 6;
var z = x + y;
var a = z + "2";
console.log("z = ", z);
console.log("a = ", a);

// let mean Cannot be Redeclared
let b = 1;
//let b = 2;

// const Cannot be Reassigned
const c = 1;
//c = 2;

// Data type
let length = 16;                               // Number
let lastName = "Johnson";                      // String
var x = {firstName:"John", lastName:"Doe"};    // Object

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

console.log(person.lastName)
console.log(typeof person)

function myAdd(nu1,nu2){
  var res = nu1 + nu2
  return res
}

console.log(myAdd(3,5))