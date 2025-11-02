// Assignment 3 Practice start
// console.log("Started!")

//  Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

// let age = prompt("Enter age")
// age = Number(age)

// if (age >= 18) {
//     console.log("Eligible")
// } else {
//     console.log("Not eligible")
// }

//  Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// for (let i = 1; i <= 10; i++) {
//     console.log(`5 * ${i} = ${5 * i}`)
// }


// Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.


// let count = 0
// for (let i = 1; i <= 15; i++) {
//     if (i > 8) {
//         count++
//     }
// }
// console.log(count)


// Ask user for password and print access status
// Hardcoded correct password. Compare with user input.
// let correctPassword = "Waleed123"
// let userPassword = prompt("Enter your password")
// if(userPassword === correctPassword){
//     console.log("Successfully logged In!🎉")
// }else{
//     console.log("Password is incorrect!❌")
// }



// Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// let correctPassword = "Waleed123";
// let totalAttempts = 3;
// let currentAttempts = 0;

// while(currentAttempts < totalAttempts){
//     let password = prompt("Enter your password");
//     if(password === correctPassword){
//         console.log("Access granted!🎉");
//         break;
//     }else{
//         currentAttempts++
//         console.log(`Incorrect password: ${totalAttempts - currentAttempts} attempts left`);
//     }
//     if(currentAttempts === totalAttempts){
//         console.log("Account Locked!🔒")
//     }
// }



// Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// let userInput = "word"
// while (userInput !== "yes") {
//     userInput = prompt("type....")
//     if (userInput === "yes") {
//         console.log(userInput + " " + "is typed.")
//     }
// }


// Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// for (let i = 1; i <= 50; i++) {
//     if (i % 7 === 0) {
//         console.log(i)
//     }
// }

// Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
// let sum = 0;
// for (let i = 1; i <= 30; i++) {
//     sum += i
// }
// console.log(sum)


// Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// let userInput = 1;
// while (userInput % 2 !== 0) {
//     userInput = +prompt("Enter number")
//     if(userInput % 2 === 0){
//         console.log(`${userInput} is even`)
//         break
//     }
// }

// Print numbers between two user inputs
// Input start and end using prompt() → print all between.


// let user1 = +prompt("Starting number");
// let user2 = +prompt("Ending number")

// for (let i = user1; i <= user2; i++) {
//     console.log(i)
// }


// Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// let count = 0;
// for(let i = 1; i<= 20; i++){
//     if(i % 2 !== 0){
//         count++
//         console.log(i)
//         if(count === 3){
//             break
//         }
//     }
// }


// Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// let numbers = prompt("Enter 5 numbers seperate with comma")
// let seperateNums = numbers.split(",")
// let positiveCount = 0;
// let negativeCount = 0;
// let positiveNums = []
// let negativeNums = []
// seperateNums.forEach(function (n) {
//     let num = Number(n)
//     if (num > 0) {
//         positiveCount++
//         positiveNums.push(num)
//     } else {
//         negativeCount++
//         negativeNums.push(num)
//     }
// })
// console.log(`total positive numbers are ${positiveCount} and numbers list is: ${positiveNums.join(",")}`)
// console.log(`total negative numbers are ${negativeCount}  and numbers list is: ${negativeNums.join(",")}`)



// ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

// let totalWithdrawals = 3;
// let totalBalance = 1000;
// let count = 0;
// while (count !== totalWithdrawals) {
//     let inputAmount = +prompt("Enter amount")
//     if (inputAmount > totalBalance) {
//         console.log("Not enough balance!")
//         break
//     } else {
//         totalBalance -= inputAmount
        
//     }
//     count++;
//     if (count === 3) {
//         break;
//     }
// }
// console.log(`total remaining balance is ${totalBalance}`)

let maxWithdrawals = 3;
let balance = 1000;

for (let count = 0; count < maxWithdrawals; count++) {
  let amount = +prompt("Enter amount to withdraw:");

  if (amount > balance) {
    console.log("Not enough balance!");
    break;
  }

  balance -= amount;
  console.log(`You withdrew ${amount}. Remaining balance: ${balance}`);
}

console.log(`Total remaining balance is ${balance}`);
