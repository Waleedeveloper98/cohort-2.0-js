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
//answer: andar return hai toh bahir console ho ga Hello, undefined

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
//answer: 4, undefined


// 1️⃣ Ek variable x global banao, aur ek function printX likho jo use kare.
// let x = 12;
// function printX() {
//     console.log(x)
// }
// printX()


// 2️⃣ Ek function likho subtract(a,b) jo a–b return kare, aur console mein "Result: <value>" print kare.

// function subtract(a,b){
//     return a -b
// }
// console.log(`Result: ${subtract(10,4)}`)

// 3️⃣ Ek function likho jisme b=10 default value ho aur a argument user de.

// function abc(a, b = 10) {
//     console.log(a,b)
// }
// abc(32, 12)
// abc(32)

//4️⃣ Ek function likho jo kisi bhi number of arguments le aur unka total print kare (use rest parameter ...nums).

// function getTotal(...nums) {
//     let sum = 0;
//     for(let i = 0; i<nums.length; i++){
//         sum += nums[i]
//     }
//     console.log(sum)
// }
// getTotal(1, 2, 3, 4, 5)


// 5️⃣ Ek function likho jo sirf first 2 arguments use kare aur baaki ignore kare.

// function ignore(a, b) {
//     console.log(a, b)
// }
// ignore(1, 2, 3, 4)


//6️⃣ Ek function likho jo ek variable ke andar dusra function define kare aur dono ko call karo.

// function outer(){
//     let a = 10;
//     function inner(){
//         console.log(a)
//     }
//     inner()
// }
// outer()


//7️⃣ Ek function likho jo ek variable msg define kare aur usko return kare.

// function getMsg(){
//     let msg = "Hello"
//     return msg
// }
// console.log(getMsg())
// console.log(typeof msg)

//8️⃣ Ek function likho jo ek number le aur check kare ke wo even hai ya odd.

// function checkType(n){
//    return n % 2 === 0 ? "even": "odd"
// }
// console.log(checkType(32))
// console.log(checkType(3421))


// 9️⃣ Ek function likho jo 2 strings concatenate karke return kare.

// function concatStr(str1,str2,str3){
//     return str1.concat(str2,str3)
// }
// console.log("Hello","World","Js")


// 🔟 Ek function likho jo kisi bhi array ka last element return kare. 

// function lastElem(...arr) {
//     return arr[arr.length - 1]
// }
// console.log(lastElem(1, 2, 3, 4, 5, 3))



// LEVEL 3 — GUESS THE OUTPUT (Closures & HOFs)
// function makeCounter() {
//     let count = 0;
//     return function () {
//         count += 1;
//         console.log(count);
//     }
// }
// const c = makeCounter();
// c();
// c();
//1,2


// function outer() {
//     let x = 1;
//     return function () {
//         console.log(x);
//     }
// }
// const a = outer();
// const b = outer();
// a();
// b();
//answer: both 1 kyuki dono seperate scope hold krte hain


// function add(a) {
//     return function (b) {
//         return a + b;
//     }
// }
// console.log(add(2)(3));
//answer: 5



// var funcs = [];
// for (var i = 0; i < 3; i++) {
//     funcs.push(function () {
//          console.log(i); 
//         });
// }
// funcs[0]();
// funcs[1]();
// funcs[2]();

// let funcs2 = [];
// for (let i = 0; i < 3; i++) {
//     funcs2.push(function () { console.log(i); });
// }
// funcs2[0]();
// funcs2[1]();
// funcs2[2]();



// function once(fn) {
//     let called = false;
//     return function () {
//         if (!called) {
//             called = true;
//             return fn();
//         }
//         return undefined;
//     }
// }
// const say = once(() => console.log("Run"));
// say();
// say();



// function counterFactory() {
//     let n = 0;//2
//     return {
//         inc() { n++; console.log(n); },//2
//         dec() { n--; console.log(n); }//1
//     }
// }
// const cf = counterFactory();
// cf.inc();//1
// cf.inc();//2
// cf.dec();//1



// function compose(f, g) {
//     return function (x) {
//         return f(g(x));
//     }
// }
// const double = x => x * 2;
// const square = x => x * x;
// const f = compose(square, double);
// console.log(f(3));


// function outerVal(v) {
//     return function () {
//         console.log(v);
//     }
// }
// const arr = [];
// for (var i = 0; i < 2; i++) {
//     arr.push(outerVal(i));
// }
// arr[0]();
// arr[1]();


// function map(arr, fn) {
//     const out = [];
//     for (let i = 0; i < arr.length; i++) {
//         out.push(fn(arr[i], i));
//     }
//     return out;
// }
// console.log(map([1, 2, 3], (n, i) => n + i));


// function delayedLogger(msg) {
//   setTimeout(function(){ console.log(msg); }, 0);
// }
// delayedLogger("Hello");
// console.log("World");


// function counter() {
//     let i = 0;
//     return function step() {
//         i++;
//         if (i === 3) return;
//         console.log(i);
//         step();
//     }
// }
// counter()();



// const a = (function(){
//   let secret = 42;
//   return {
//     get() { return secret; },
//     set(v) { secret = v; }
//   };
// })();
// console.log(a.get());
// a.set(100);
// console.log(a.get());


// function curry3(fn) {
//     return function (a) {
//         return function (b) {
//             return function (c) {
//                 return fn(a, b, c);
//             }
//         }
//     }
// }
// function sum(a, b, c) { return a + b + c; }
// console.log(curry3(sum)(1)(2)(3));
