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




// Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// let word = prompt("Enter a word");
// let count = 0;
// while (word !== "stop") {
//     word = prompt("Enter a word")
//     if (word === "stop") break
//     if (word === "yes") count++
// }
// console.log(`you type ${count} times yes`)




// Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.


// let number = prompt("Enter a number")
// while (number % 2 !== 0) {
//     number = prompt("Enter a number")
//     console.log("even")
// }


// Print numbers between two user inputs
// Input start and end using prompt() → print all between.


// let u1 = +prompt("Enter a number")
// let u2 = +prompt("Enter a number")
// if (u1 > u2) {
//     console.error("first number must be less than second number")
// }
// for (let i = u1; i <= u2; i++) {

//     console.log(i)
// }


//Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// let count = 0;
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 1) {
//         count++
//         console.log(i)
//         if(count === 3)break
//     }
// }
// console.log(count)


// Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// let positiveCounter = 0;
// let negativeCounter = 0;
// let positiveNums = []
// let negativeNums = []
// let userNumbers = prompt("Enter 5 numbers with space")
// if (userNumbers === null) {
//     console.error("cancelled")
// } else {
//     userNumbers.split(" ").forEach((n) => {
//         if (Number(n) > 0) {
//             positiveCounter++
//             positiveNums.push(n)
//         } else {
//             negativeCounter++
//             negativeNums.push(n)
//         }
//     })
//     console.log(`Total positive numbers : ${positiveCounter} and these are numbers ${positiveNums.join(",")}`)
//     console.log(`Total positive numbers : ${negativeCounter} and these are numbers ${negativeNums.join(",")}`)
// }



// ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”


let balance = 1000;
let totalWithdrawals = 0;



while (totalWithdrawals < 3) {
    let withdrawalAmount = prompt(`Enter withdrawal amount your total balance is ${balance}`)
    totalWithdrawals++
    if (withdrawalAmount === null) {
        console.error("You cancelled it")
        break
    }
    else if (withdrawalAmount.trim() === "") {
        console.error("Invalid amount.")
        break
    }
    else if (isNaN(Number(withdrawalAmount))) {
        console.error("Only numbers are valid")
        break
    }
    else if (Number(withdrawalAmount) > balance) {
         alert(`Your remaining balance is ${balance} so enter amount under your balance limit`)
        console.error("balance low!")
        continue
    } else if (totalWithdrawals === 3) {
        console.error("Your daily withdrawal limit is full")
        break
    }
    else {
        balance -= Number(withdrawalAmount)
    }
}
console.log(`Your remaining balance is ${balance}`)
