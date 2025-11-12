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