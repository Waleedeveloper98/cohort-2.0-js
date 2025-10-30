// 29 Sep class assignment practice start
// Basic Operators

// 1.Create two numbers a = 10 and b = 3.
// Perform and log: a + b, a - b, a * b, a / b, a % b.

// let a = 10;
// let b = 3;
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)


// 2.Write: let x = 5; x = x + 3;
// Now rewrite the same using +=
// Do the same for -=, *=, /=.

// let x = 5;
// x = x + 3;
// x += 3
// x -= 3
// x *= 3
// x /= 3
// console.log(x)

// 3.let count = 5;
// Use count++ and log value before and after.
// Repeat for count–.

// let count = 5;
// count++
// console.log(count)
// count--
// console.log(count)



// 4.Compare two values: 5 == “5” and 5 === “5”.
// Observe difference.

// console.log(5 == "5")
// console.log(5 === "5")

// 5.Check if 10 is greater than 5, less than 20, and equal to 10.

// if (10 > 5 && 10 < 20 && 10 === 10) {
//     console.log("Correct")
// } else {
//     console.log("Incorrect")
// }


// 6.Try logical AND and OR:
// true && false
// true || false
// !(true)

// console.log(true && false)
// console.log(true || false)
// console.log(!true)


// 7.Predict the result of:
// (5 > 3 && 10 > 8),
// (5 > 3 || 10 < 8)

// console.log(5 > 3 && 10 > 8)
// console.log(5 > 3 || 10 < 8)



// Variable Hoisting in Js
// 1.Predict output of:
// console.log(a);
// var a = 10;

// 2.Predict output of:
// console.log(b);
// let b = 10;

// 3.Predict output of:
// test()
// function test() {
//     console.log("Hello")
// }


// 4.Try writing a function expression before initialization and call it:
// hello()
// var hello = function () {
//     console.log("Hi")
// }
// Write what happened and why.
//It not run hello() because variable declearation only move top of the code not function expression it is expression here hello is undefined so it will give us error.


// 5.Write one sentence:
// What gets hoisted?
//variable declearations are hoisted.
// What does not get hoisted fully?
//function expressions are not hoisted.


// Conditional Operators (if, else, else-if, ternary, switch)

// 1.Take input using prompt for age.
// If age > 18 → log “Adult”.
// Else → log “Minor”.

// let age = prompt("What is your age?")
// if (age > 18) {
//     console.log("Adult")
// } else {
//     console.log("Minor")
// }


// 2.Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”

// let marks = 67;
// if (marks >= 90) {
//     console.log("A grade")
// } else if (marks >= 75) {
//     console.log("B grade")
// } else if (marks >= 50) {
//     console.log("C grade")
// } else {
//     console.log("Fail")
// }

// 3.Create a variable city = “Bhopal”.
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”

// let city = "Bhopal"
// if (city === "Bhopal") {
//     console.log("MP")
// } else if (city === "Delhi") {
//     console.log("Capital")
// } else {
//     console.log("Unknown City")
// }

// 4.Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.

// let score = 40;
// score > 35 ? console.log("Pass") : console.log("Fail")

// 5. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }

// let temperature = 25;
// temperature > 30 ? console.log("Hot") : console.log("Pleasant")

// 6.Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.

// let day = "Friday";
// switch (day) {
//     case "Monday":
//         console.log("Monday")
//         break;
//     case "Tuesday":
//         console.log("Tuesday")
//         break;
//     case "Wednesday":
//         console.log("Wednesday")
//         break;
//     case "Thursday":
//         console.log("Thursday")
//         break;
//     case "Friday":
//         console.log("Friday")
//         break;
//     case "Saturday":
//         console.log("Saturday")
//         break;
//     case "Sunday":
//         console.log("Sunday")
//         break;
//     default:
//         console.log("Invalid Day")
// }


// 7.Using logical operators in condition:
// If age > 18 and country == "Pakistan" → log “Eligible for Vote”
// Else → “Not Eligible”

// let age = 22;
// let country = "Pakistan"
// if (age === 22 && country === "Pakistan") {
//     console.log("Eligible for Vote")
// } else {
//     console.log("Not eligible")
// }