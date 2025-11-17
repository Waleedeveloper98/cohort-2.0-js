//1. Ask user for a number and check if it is even or odd
// let num = Number(prompt("Enter a number"))
// if(num % 2 === 0) console.log("Even number")
// else console.log("Odd number")


//2. Print numbers from 10 down to 1 using a loop
// for (let i = 10; i > 0; i--) {
//     console.log(i)
// }


//3. Ask user for 5 names, store them in an array, and print them in reverse order

// let naam = prompt("Enter a name")
// let count = 0;
// let namesBox = []
// namesBox.push(naam)
// count++
// while (count !== 5) {
//     naam = prompt("Enter a name")
//     count++
//     namesBox.push(naam)
// }
// console.log(namesBox)

//second way

// let box = []
// for (let i = 0; i < 5; i++) {
//     let naam = prompt("Enter a name")
//     box.push(naam)
// }
// console.log(box)



//4.Ask user for a sentence and count how many vowels (a,e,i,o,u) it has

// let sentence = prompt("Enter a sentence...")
// sentence = sentence.toLowerCase()
// let count = 0;
// for (let i = 0; i < sentence.length; i++) {
//     // if(sentence[i] === "a" || sentence[i] === "e" || sentence[i] === "i"|| sentence[i] === "o" || sentence[i] === "u"){
//     //     count++
//     // }
//     // if ("aeiou".includes(sentence[i])) count++
// }
// console.log(count);



//5. Generate a random number between 1 and 20
// let randomNumber = Math.floor(Math.random() * 20) + 1

// let guess;
// while (true) {
//     guess = prompt("Enter a number between 1 to 20")
//     if (guess === null) {
//         alert("null hai")
//         break
//     }
//     let converted = +guess
//     if (randomNumber === converted) {
//         console.log("Guess is correct! 🎉")
//         break
//     }
//     if (converted > randomNumber) alert("Too high")
//     else alert("Too low")
// }



// 6. Ask user 5 numbers and store only the unique ones in a new array
// let unique = []
// for(let i = 0; i<5; i++){
//     let number = +prompt("Enter a number")
//     if(unique.includes(number))continue
//     unique.push(number)
// }
// console.log(unique);


// let sentence = prompt("Enter a sentence")
// let words = sentence.split(" ")
// let unique = []

// for(let i = 0; i<words.length; i++){
//     if(!unique.includes(words[i])){
//         unique.push(words[i])
//     }
// }
// console.log(unique);

// 7. Ask user for two numbers and print all even numbers between them


// let u1 = +prompt("Enter starting number")
// let u2 = +prompt("Enter ending number")
// for (let i = u1; i <= u2; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }




// 8. Simulate Login System with Two Fields

// let username = prompt("Enter username")
// let password = prompt("Enter password")
// let correctUsername = "waleed123"
// let correctPassword = "Muhammad786$"


// while (username !== correctUsername || password !== correctPassword) {
//     alert("Invalid Credentials")
//     username = prompt("Enter username")
//     password = prompt("Enter password")

// }
// alert("Login Successful")



//9. Ask user for 10 numbers and create 2 arrays:
// One array for even numbers
// One array for odd numbers
// Print both arrays.
// let evenNums = []
// let oddNums = []
// for(let i = 0; i<10; i++){
//     let number = +prompt("Enter a number")
//     if(number % 2 === 0) evenNums.push(number)
//     else oddNums.push(number)
// }

// console.log(evenNums);
// console.log(oddNums);


// with while
// let evenNums = []
// let oddNums = []
// let i = 0;
// while (i < 10) {
//     let number = +prompt("Enter a number")
//      if(number % 2 === 0) evenNums.push(number)
//     else oddNums.push(number)
//     i++
// }
// console.log(evenNums);
// console.log(oddNums);


// 10. Build a Mini Shopping Cart Price Calculator

// Ask user how many items they want to add.
// For each item ask:
// name
// price

// At the end print:
// total items
// total price
// average price per item

// let totalQuantity = +prompt("Enter total items quantity in number")
// let counter = 0;
// let products = [];
// while (totalQuantity !== counter) {
//     if (totalQuantity === counter) break;
//     let productName = prompt("Enter product name")
//     let productPrice = +prompt("Enter product price")
//     products.push({
//         productName,
//         productPrice
//     })
//     counter++
// }
// let totalPrice = products.reduce((total, currentItem) => total + currentItem.productPrice, 0)
// let averagePrice = totalPrice / products.length
// console.log(
//     `-------- FINAL BILL --------
//     Total Items: ${products.length}
//     Total Price: RS ${totalPrice}
//     Average Price per Item: RS ${averagePrice}
//     `
// );









// let totalQuantity = +prompt("Enter total items quantity in number")
// let products = [];
// for (let i = 0; i < totalQuantity; i++) {
//     let productName = prompt("Enter product name")
//     let productPrice = +prompt("Enter product price")
//     products.push({
//         productName,
//         productPrice
//     })
// }
// let totalPrice = products.reduce((total, currentItem) => total + currentItem.productPrice, 0)
// let averagePrice = totalPrice / products.length
// console.log(
//     `-------- FINAL BILL --------
//     Total Items: ${products.length}
//     Total Price: RS ${totalPrice}
//     Average Price per Item: RS ${Math.floor(averagePrice)}
//     `
// );