//practice start

//Question 1
//Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

// let age = prompt("Enter your age");

// if (age === null) {
//     console.error("You cancelled!")
// } else if (age.trim() === "") {
//     console.error("You did not enter anything in input");
// }
// else {
//     const numAge = Number(age)
//     if (isNaN(numAge)) {
//         console.error("You enter string only add number")
//     }
//     else if (numAge < 0) {
//         console.error("Age must be in positive number")
//     }
//     else {
//         console.log(`Your age is ${numAge}`)
//     }
// }



// Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`)
// }


// Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.
// let count = 0;
// for (let i = 1; i < 15; i++) {
//     if (i > 8) {
//         count++
//         console.log(i)
//     }
// }
// console.log(`total count is ${count}`)




// Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

// let myPassword = prompt("Enter your password");
// let password = "Waleed123";

// if(myPassword === null){
//     console.error("You cancelled it!")
// }else{
//     if(myPassword === password){
//         console.log("Access granted 🎉")
//     }else{
//         console.error("Password not matched! ❌")
//     }
// }



//LEVEL 2
//  Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// let password = "Wal23$s";
// let attempts = 0;
// let isCorrect = false;

// let myPassword = prompt("Enter your password")
// attempts++

// if (myPassword === password) {
//     isCorrect = true;
//     console.log("Password is matched 🎉")
// }

// while (myPassword !== password) {
//     if (attempts === 3) {
//         console.error("Account Locked")
//         break;
//     }
//     myPassword = prompt(`Enter your correct password attempt ${attempts}`)
//     attempts++
//     if (myPassword === password) {
//         isCorrect = true;
//         console.log("Password is matched 🎉")
//     }

// }



// Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.


// for (let i = 1; i <= 50; i++) {
//     if(i%7 === 0){
//         console.log(i);
//     }
// }


//Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// let sum = 0;
// for (let i = 1; i <= 30; i++) {
//     if (i % 2 === 1) {
//         sum += i
//     }
// }
// console.log(sum);
