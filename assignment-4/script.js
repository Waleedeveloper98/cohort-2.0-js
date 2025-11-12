//Level 1 - Basic function,Array & Object Tasks

// 1.Write a function, sayHello(),that prints "Hello JavaScript"
// function sayHello(){
//     console.log("Hello JavaScript")
// }
// sayHello()

//2.Create a function add(a,b), that return stheir sum and log the result.

// function add(a,b){
//     return a + b
// }
// let ans = add(2,4)
// console.log(ans);


// 3.write a function with a default parameter name = Guest that prints Hi <name>

// function greet(name= "Guest"){
//     console.log(`Hi ${name}`)
// }
// greet()
// greet("Waleed")


// 4.Use rest parameters to make a function that adds unlimited numbers.
// function add(...nums) {
//     let sum = 0
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//     }
//     return sum
// }
// let ans = add(1, 2, 3, 4, 5)
// console.log(ans);

// function add(...nums){
//     let sum = 0;
//     nums.forEach((n)=>{
//         sum += n
//     })
//     return sum
// }
// let ans = add(1, 2, 3, 4, 5)
// console.log(ans);


// function add(...nums) {
//     let sum = 0;
//     nums.map((n) => {
//         return sum += n
//     })
//     return sum
// }

// let ans = add(1, 2, 3, 4, 5)
// console.log(ans);

// function add(...nums) {
//     return nums.reduce((sum, n) => sum + n, 0)
// }
// let ans = add(1, 2, 3, 4, 5)
// console.log(ans);


// 5. create an iife that prints "I run instantly!"
// (function(){
//     console.log("I run instantly!");
// })()

//6. make a nested function where the inner one prints a variable from the outer one.

// function outer(){
//     let a = 10;
//     function inner(){
//         console.log(a);
//     }
//     inner()
// }
// outer()

// 7.create an array of 5 fruits. Add one at the end and remove one from the beginning.

// let fruits = ["apple", "banana", "cherry", "mango", "grapes"]
// fruits.push("guava")
// fruits.shift()
// console.log(fruits);


// 8.use a for loop to print all elements of an array.

// let fruits = ["apple", "banana", "cherry", "mango", "grapes"]
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// 9.create an object person with keys name age and city and print each key's value.

// let person = {
//     name: "Waleed",
//     age: 22,
//     city: "Islamabad"
// }
// for(let key in person){
//     console.log(`${key} : ${person[key]}`)
// }

// 10. use setTimeout() to log "Time's up!" after 2 seconds.

// setTimeout(()=>{
//     console.log("Time's up!");
// },2000)



//Level 2 - Functional Thinking & Logic tasks

// 1.Write a higher-order-function runTwice(fn) that takes another function and execute it two times.

// function runTwice(fn){
//     fn()
//     fn()
// }
// runTwice(function(){
//     console.log("run")
// })

//2.Create one pure function that always returns the same output for a give input, and one impure function using a global variable.

// function pure(n){
//     console.log(n + 10)
// }
// pure(5)
// pure(5)

// function impure(n){
//     console.log(Math.random() + n)
// }
// impure(5)
// impure(5)


// let a = 10;
// function impuree(){
//     a++
//     console.log(a)
// }
// impuree()


// 3. Write a function that uses object destructuring inside parameters to extract and print name and age

// function person({ name, age }) {
//     console.log(name, age)
// }
// person({ name: "Waleed", age: 22 })


//4.Demonstrate the difference between normal funciton and arrow funciton wien used as object methods (the this issue)

// let user = {
//     name: "Waleed",
//     sayHi: function(){
//         console.log(`Hi ${this.name}`)
//     }
// }
// user.sayHi()
//this point to method which is object

let user = {
    name: "Waleed",
    sayHi: ()=>{
        console.log(`Hi ${this.name}`)
    }
}
user.sayHi()
//this point to the window


//5.Given an array of numbers use map(), to create a new array where each number is squared.

// let nums = [1, 2, 3, 4, 5];
// let newArr = nums.map((n)=>{
//     return n * n
// })
// console.log(newArr);

// 6.use filter to get only even numbers from an array.

// let arr = [1, 2, 43, 1, 21, 2, 43, 4, 2, 6, 7, 45, 87]
// let evens = arr.filter((n)=> n % 2 === 0)
// console.log(evens)

// 7. use reduce to find the total salary from an array of numbers
// let salaries = [10000, 32400, 54000, 23000]
// let total = salaries.reduce((total, val) => total + val, 0)
// console.log(total)

//8.create an array of names and use some()and every to test a condition (e.g all names longer than 3 chars).

// let names = ["Arif", "Bilal", "Danish", "Faisal", "Imran"]
// console.log(names.some((name)=>{
//     return name.length > 3
// }))

// console.log(names.every((name)=>{
//     return name.length > 3
// }))


// 9.create an object user and test the behavior of object.freeze() and object.seal() by adding/changing keys.

// let user = {
//     name: "Waleed",
//     age: 22
// }
// Object.freeze(user)
// user.age = 23
// console.log(user)

// let user = {
//     name: "Waleed",
//     age: 22
// }
// Object.seal(user)
// user.age = 23
// console.log(user)


// 10. create a nested object (user > address > city) and access the city name inside it.

// let obj = {
//     name: "Waleed",
//     address: {
//         city: "Islamabad"
//     }
// }
// console.log(obj);
// console.log(obj.address.city)
