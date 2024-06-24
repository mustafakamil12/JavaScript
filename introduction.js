/*
var a, b
var c = 30

a = 10
b = 20

//--------------------
console.log("a = ", a)
console.log("b = ", b)
console.log("c = ", c)

console.log("a + b = ",a + b)
console.log("a - b = ", a - b)
console.log("a * b = ", a * b)
console.log("a % b = ", a % b)
console.log("a / b = ", a / b)
console.log("a before ++ = and a after ++ =", a ++, a)
console.log("a before -- =  and a after -- = ", a --, a)
// in the code line below there's very important issue need to take care of is when using + with string and number
console.log("special case of concatenation letter z with a value = ", "z"+a)

//--------------------
console.log("a == b => ", a == b)
console.log("a != b => ", a != b)
console.log("a > b => ", a > b)
console.log("a < b => ", a < b)
console.log("a >= b => ", a >= b)
console.log("a <= b => ", a <= b)

//--------------------
y = true
z = false
console.log("y:" + y, "   z:" + z)
console.log("y && z => ", y && z)
console.log("y || z => ", y || z)
console.log("!(y && z) => ", !(y && z))

//----------------------
w = 2
x = 3
y = ~x
z = -12
omega = 12
// This function is used to convert any dec. to binary and print it as string.
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}
console.log("w = 2 = " , dec2bin(2))
console.log("x = 3 = " , dec2bin(3))
console.log("w & x => ", w & x)
console.log("w | x => ", w | x)
console.log("w ^ x => ", w ^ x)
console.log("~x => ",  ~x, dec2bin(y))
console.log("w << 1 => ", w << 1)   // left shift 
console.log("w >> 1 => ", w >> 1)   // right shift
console.log("w >>> 1 => ", w >>> 1) // right shift with zero
console.log("omega: " + dec2bin(omega))
console.log("z: " + dec2bin(z))

//-----------------------
d = (a > b) ? a : c // conditional ternary operator
console.log(d)
//-----------------------
if (a > b) {
  console.log("a > b")
}else if (a < b){
  console.log("a < b")
}else{
  console.log("unable to determine")
}

//-----------------------
e = 5
switch (e) {
  case 1:
  console.log("1")
  break
  case 2:
  console.log("2")
  break
  case 3:
  console.log("3")
  break
  case 4:
  console.log("4")
  break
  case 5:
  console.log("5")
  break
  default: console.log("Default")
}

//-----------------------
f = 0
while(f < 5){
  console.log(f)
  f += 1
}
//-----------------------
g = 5
do {
  console.log(g)
}while (g < 5)
//-----------------------
for(h = 101; h <= 102; h++){
  console.log(h)
}
//-----------------------
dom = "BOOK"
for(i in dom){
  console.log(dom[i])
}
//-----------------------
j = 0
while(j < 8){

  if(j == 4){
    console.log("we reach to #4 so we will use continue...")
    j += 1 // be carefull this step is very important...
    continue;
  }
  if(j == 7){
    console.log("we reach to #7")
  }
  console.log(j)
  j += 1
}

//-----------------------
console.log("Using labels")
outerloop:
for(k = 0; k <= 3; k++){
  console.log(k)
  innerloop:
  for(l = 10; l <= 15; l++){
    if(l == 14) break;
    if(l == 13) break innerloop
    //if(l == 12) break outerloop
    console.log(l)
  }
}
console.log("I'm in the main body of the program...")

//-----------------------
function myfunc(m){
  console.log("Hello ", m)
}
myfunc("Mustafa")


//-----------------------
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person)
//-----------------------

console.log("working with oop")
var employee = new Object()      //<-- instantiation from Object
var books = new Array("C++","Perl","Java")
var day = new Date("Augus 15, 1947")

console.log(employee)
console.log(books)
console.log(day)

var book = new Object()
book.subject = "Perl"
book.author = "Mustafa"
console.log(book)
console.log(book.subject)
console.log(book.author)

//Another way to create object with user-defined name_function
function addPrice(amount){
  //this.price = amount
  with(this){
    price = amount
  }
}

function book(title, author){
  this.title = title
  this.author = author
  this.price = 0   //used when we use with keyword above.
  this.addPrice = addPrice
}

var myBook = new book("Perl","Mustafa")
myBook.addPrice(100)

//console.log(myBook)
console.log(myBook.title)
console.log(myBook.author)
console.log(myBook.price)

//-----------------------

	const person = {
		firstName: "John",
		lastName : "Doe",
		id       : 5566,
		fullName : function() {
		    return this.firstName + " " + this.lastName;
		}
	};
  //console.log(person)
  //console.log(person.fullName())

//-----------------------
let x = this;
console.log(x)
 
//-----------------------
function myFunction() {
  return this;
}
console.log(myFunction())

//-----------------------
"use strict";
let x = this;
console.log(x)

//-----------------------
"use strict";
function myFunction() {
  return this;
}
console.log(myFunction())

//-----------------------
var a = 5;
console.log(a); // 5
{
    var a = 3;
    console.log(a); // 3
}
console.log(a); // 3
//-----------------------

let a = 5;
console.log(a); // 5
{
    let a = 3;
    console.log(a); // 3
}
console.log(a); // 5

//-----------------------

var a = 2;
for(var a = 0; a <= 3; a++) {
    console.log('hello');
}
console.log(a); // 3

//----------------------- 

let a = 2;
for(let a = 0; a <= 3; a++) {
    console.log('hello');
}
console.log(a); // 2
//-----------------------
var a = 5; // 5
var a = 3; // 3
//-----------------------
let a = 5;
let a = 3; // error   
//----------------------- 
x = 5
console.log(x)
var x
//----------------------- 
x = 3
console.log(x)
let x // error
//----------------------- 

const summary = function (usrName, usrAge, userHasHobby){
  return(
  'Name is ' +
  usrName +
  ', age is ' +
  usrAge +
  ' and the user has hobbies: ' +
  userHasHobby
  );
 }
console.log(summary('Mustafa','43','Chees'))

//----------------------- 
const summary =  (usrName, usrAge, userHasHobby) => {
  return(
  'Name is ' +
  usrName +
  ', age is ' +
  usrAge +
  'and the user has hobbies: ' +
  userHasHobby
  );
}
console.log(summary('Mustafa','43','Chees'))

//----------------------- 
const add = (a,b) => a + b;  // ommit return and curly braces
console.log(add(5,15))

//----------------------- 

const addOne = a => a + 1;   // we have one parameter
console.log(addOne(100))

//----------------------- 

const addRandome = () => 1000 + 2000 ; // no prarmeters
console.log(addRandome())

//-----------------------  
dom = "BOOK"
for(i in dom){                      // Using in retrieve index of the element.
  console.log(dom[i])
}

//-----------------------  
 
const hobbies =  ['Sports','Cooking']
for (let hobby of hobbies){         // Using of retrieve the element itself.
  console.log(hobby);
}
//----------------------- 
console.log("using map function: ",hobbies.map(hobby => 'Hobby: ' + hobby));
console.log("print hobbies array: ",hobbies);

//----------------------- 
console.log("using spread 1: ",hobbies[hobbies]);

const copiedArray = [hobbies]; 
console.log("using spread 2: ",copiedArray);     //-- [['Sports','Cooking']]

const copiedArry = [...hobbies] // using rest operator
console.log("using rest: ",copiedArry)
//----------------------- 

const toArray = (arg1,arg2,arg3) => {
  return [arg1,arg2,arg3];
};
console.log(toArray(1,2,3,4));

const toArray1 = (p1,p2,p3) => [p1,p2,p3]
console.log(toArray1(100,200,300));

const toArray2 = (arg1,arg2,arg3) => [arg1,arg2,arg3]
console.log(toArray2(1,2,3,4));  // result [1,2,3] it will not take the 4th element.

//----------------------- 

const toArray3 = (...args) =>  args;
console.log(toArray3(1,2,3,4));

//----------------------- 
//Destructing

const printName1 = (personData) => {
  console.log("inside printName1: ",personData.firstName);
}
printName1(person);            //-- where person is an object

//-----------------------
const printName2 = ({ firstName }) => {
  console.log("inside printName2: ",firstName);
}
printName2(person);

//-----------------------
const {firstName, lastName } = person;  //-- must be the same attributes in the object.
console.log(firstName, lastName);  

//-----------------------
const hobbies = ['Sports','Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

//-----------------------
//Async and promises

const myTimeout = setTimeout(myGreeting, 5000);
function myGreeting(){
  console.log("Hello Mustafa!");
}
console.log("Program End")

//-----------------------

setTimeout(() => {
  console.log('Timer is done')
}, 5000);
console.log("Program End")
//-----------------------
//How to use callback

function firstFunc(callback){
  console.log("we are in the firstFunc")
  callback('call secondFunc from firstFunc')
}
function secondFunc(p2){
  console.log("secondFunc: ",p2)
}
firstFunc(secondFunc)


//-----------------------
*/
const fetchData = callback => {
  console.log("inside fetchData")
  setTimeout(() => {
    callback('Done in fetchData');
  },1500);
};

setTimeout(() => {
  console.log("inside setTimeout fx side")
  console.log('Timer is done in original setTimeout!');
  fetchData(text => {
    console.log(text);
  });
}, 2000);


console.log('Hello!');
console.log('Hi!');
