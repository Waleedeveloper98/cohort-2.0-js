// start
// 1️⃣ Ek function sayHello likho jo console mein "Hello JavaScript" print kare.

// function sayHello(){
//     console.log("Hello JavaScript")
// }
// sayHello()


// 2️⃣ Ek function add likho jo 2 numbers lega aur unka sum return kare.

// function add(a, b) {
//     return a + b
// }
// let ans = add(2, 6)
// console.log(ans)


// 3️⃣ Ek function multiply likho jo 3 numbers lega aur unka product return kare.

// function multiply(a, b, c) {
//     return a * b * c
// }

// let ans = multiply(2, 5, 6)
// console.log(ans)

// 4️⃣ Ek function greet likho jo ek name input le aur "Hello, name!" return kare.

// function greet(name){
//     return `Hello, ${name}!`
// }
// let ans = greet("Waleed");
// console.log(ans)


//5️⃣ Ek function likho jo 2 arguments le — firstName aur lastName — aur "Full Name: firstName lastName" print kare.

// function fullName(firstName, lastName) {
//     console.log(`Full Name: ${firstName} ${lastName}`)
// }
// fullName("Muhammad", "Waleed")

// 6️⃣ Ek function likho jo check kare number positive hai ya negative.

// function checkNums(n) {
//     n > 0 ? console.log("Positive") : console.log("Negitave")
// }
// checkNums(2)
// checkNums(-2)
// checkNums(-54)
// checkNums(43)


// 7️⃣ Ek function likho jo 2 numbers me se bada number return kare.

// function bigNum(a, b) {
//     return a > b ? a : b;
// }

// console.log(bigNum(2, 4));
// console.log(bigNum(10, 4));


// 8️⃣ Ek function likho jo kisi bhi number ko 2 se multiply karke return kare (hardcode mat karo, argument use karo).

// function doubleNum(n){
//     return n * 2
// }
// console.log(doubleNum(4))
// console.log(doubleNum(5))
// console.log(doubleNum(10))

// 9️⃣ Ek function likho jo "Good Morning" print kare bina parameter ke.

// function morning(){
//     console.log("Good Morning")
// }
// morning()

// 🔟 Ek function likho jo given string ki length return kare.

// function getLength(str){
//     return str.length
// }
// console.log(getLength("Muhammad"))


// level 1 guess the output

// function sayHi() {
//   console.log("Hi");
// }
// sayHi();
//answer: Hi


// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 3));
//answer: 5


// function greet(name) {
//   console.log("Hello " + name);
// }
// greet();
//answer: Hello undefined


// function test() {
//     return;
//     console.log("After return");
// }
// test();
//answer: empty


// function double(x) {
//   return x * 2;
// }
// console.log(double());
//answer: NaN


// function show(a, b = 10) {
//   console.log(a + b);
// }
// show(5);
// show(5, 20);

// answer: 15,25


// console.log(square(3));
// function square(n) {
//   return n * n;
// }

// answer: it is function declearation so function will be fully hoisted console will run here output will be 9


// console.log(multiply(2, 3));

// var multiply = function (a, b) {
//     return a * b;
// };

//answer: it is function expression so function will not fully hoisted only variable will be hoisted multiply will be so it will give error multiply is not a function

// function outer() {
//     let x = 5;
//     function inner() {
//         console.log(x);
//     }
//     inner();
// }
// outer();
// answer: it will print 5 because x is accessable in full function 

// let a = 10;
// function printA() {
//     let a = 20;
//     console.log(a);
// }
// printA();
// console.log(a);
//answer: printA() print 20 aur log a print 10 because a = 10 is in global scope and a = 20 in function scope so both are different



// LEVEL 2 — GUESS THE OUTPUT

// var x = 1;
// function printX() {
//     console.log(x);
// }
// printX(); //1
// var x = 5;
// printX(); //5
//answer: first wala x 1 print kre ga kyunk x global mein hai phir x update kia hai toh x 5 aaye ga kyuki var is fully hoisted


// function sub(a, b) {
//     const res = a - b;
//     console.log("Result:", res);
//     return res;
// }
// const v = sub(10, 3);
// console.log(v);

//answer: Result: 7 ,7 first console chale ga phir return res hai jo bhi answer ho ga res ka

// function withDefault(a, b = 10){
//   console.log(a + b);
// }
// withDefault(5);
// withDefault(5, 2);
//answer: 15,7 first wala default wali value le ga second wala args wali values ke ga


// function sumAll(...nums){
//   console.log(nums);
//   return nums.reduce((s, n) => s + n, 0);
// }
// console.log(sumAll(1,2,3));
// answer: nums full array print kre ga phir sumAll call kia hai 3 args se toh inka sum print kre ga jo hai 6


// function firstTwo(a, b){
//   console.log(a, b);
// }
// firstTwo(1,2,3,4);
//answer: 1,2 print and baki ignore kr diye jye gy


// function outer() {
//     const a = 7;
//     function inner() {
//         console.log(a);
//     }
//     inner();
//     return typeof inner;
// }
// console.log(outer());
//answer: 7, function return kia hai toh call ko console mein likhe gy


// function sayMsg() {
//     const msg = "Hello!";
//     return msg;
// }
// console.log(sayMsg());
// console.log(typeof msg);
//answer: andar return hai toh bahir console ho ga Hello, string

// function isEven(n) {
//     if (n % 2 === 0) return "even";
//     return "odd";
// }
// console.log(isEven(4));
// console.log(isEven(7));
//answer: even ,odd


// function joinStrings(a, b) {
//     return a + " " + b;
// }
// console.log(joinStrings("Hello", "World"));
// answer: Hello World


// function lastElem(arr) {
//     return arr[arr.length - 1];
// }
// console.log(lastElem([1, 2, 3, 4]));
// console.log(lastElem([]));
//answer: 4, kuch nahe