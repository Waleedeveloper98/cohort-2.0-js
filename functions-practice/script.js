// function practice start here

// function greet(name) {
//   console.log("Hello " + name);
// }
// greet("Yugant");
// greet();


// Output kya hoga?
// Agar second call me koi argument nahi diya gaya, kya hoga?
// answer : undefined aaye ga


// function add(a, b) {
//   return a + b;
// }
// console.log(add(5, 7));
// console.log(add(10));

// Second call me kya output aayega aur kyun?
//answer: aik parameter dia gya hai a = 10 aur b = undefined ho ga 10 + undefined = NaN because it is false operation.



// function introduce(name = "Guest", country = "India") {
//     console.log(`${name} is from ${country}`);
// }
// introduce("Yugant", "Japan");
// introduce("Ravi");
// introduce();

// Teeno calls ke output likho.
// answer :
//Yugant is from Japan
//Ravi is from India
//Guest is from India


// function sumAll(...nums) {
//     let total = 0;
//     for (let n of nums) total += n;
//     return total;
// }

// console.log(sumAll(2, 4, 6));
// console.log(sumAll(5));
// console.log(sumAll());

// Explain karo ki rest parameter kya kar raha hai.
//answers : 12,5,0
//rest parameter saari values ko array mein dal deta hai



// function multiply(a, b, c) {
//     console.log(a * b * c);
// }
// const arr = [2, 3, 4, 5];
// multiply(...arr);

// Yahan ...arr kya kar raha hai? Output kya hoga?
//answer: yaha ...arr ,arr array ki saari values ko spread kr de ga arguments mein so each value har aik paramerter mein aaye ge.
// so total will be 24


// function showDetails(...info) {
//   console.log(info);
// }

// const data = ["Yugant", 21, "Surat"];
// showDetails(...data);

// Step by step explain karo ki ... dono jagah kya kar raha hai.
//answer: function create kia aur parameter mein ...info aik rest parameter hai aur func k andar ise print kr dia.
//after func aik data constant mein air array assign kia jis mein 3 elements hain.
// phir showdetails()mein data array spread kr dia toh data saari values spread kr de ga aur ye values info array mein add hon jye ge



// sayHi();

// function sayHi() {
//     console.log("Hello!");
// }

// greet();
// const greet = function () {
//     console.log("Hi there!");
// };


// Yeh code bina error chalega?
//1st fnc Hello! print kre ga because func declearation/statment are hoisted so we can use.
//2nd fnc Hi there! print kre ga

// Agar greet(); ko upar likh do to kya hoga?
//toh error aaye ga greet is not func because func expressions are not hoisted
//explaination:
//agar greet pahle call kia toh variable declearation hoist ho jye ge yaha const hai const hoist ho jye ga but initlize nahe ho ga toh error aaye ga  cannot acces before init



// console.log(sum(2, 3));

// function sum(a, b) {
//     return a + b;
// }

// console.log(multiply(2, 3));

// const multiply = (a, b) => a * b;


// function orderSummary(customer = "Guest", ...items) {
//     console.log(`Customer: ${customer}`);
//     console.log(`Items: ${items.join(", ")}`);
//     console.log(`Total items: ${items.length}`);
// }

// orderSummary("Yugant", "Burger", "Fries", "Coke");
// orderSummary("Ravi");
// orderSummary();

// Output likho aur samjhao kya ho raha hai har call me.
//first call mein yugant customer mein aaye ga baki items array mein so all print
//second call mein ravi customer mein aaye ga phir arg mein values nahe hain toh items array mein kuchh nahe aage ga to items.join wali line mein items: kuchh nahe print ho ga aur length 0
//thrid call mein guest customer mein aaye ga phir same as second









//  Ek function printAll banao jo jitne bhi arguments aaye, unko line by line print kare.

// function printAll(a, b) {
//     console.log(a, b)
// }
// printAll(3, 4)
// printAll(23, 2)
// printAll(22, 43)



// Ek function addAll banao jo jitne bhi    numbers aaye unka sum return kare.

// function addAll(...nums) {
//     return nums.reduce((total, n) => total += n, 0)
// }
// console.log(addAll(1, 2, 3, 4, 5))



// concatStrings("Hello", "Yugant", "Singh") → "Hello Yugant Singh"

// let arr = ["Hello", "Yugant", "Singh"]
// console.log(arr.join(" "))

// function findMax(...nums) {
//   return Math.max(...nums);
// }

// console.log(findMax(10, 25, 8, 99, 32)); // 99



// Ek function separateTypes(...args) banao jo mixed arguments lega(numbers, strings, booleans).
// Phir unko unke type ke hisaab se alag - alag arrays me rakhe.
// Aur ek object return kare jisme teen arrays ho:
//  * numbers → saare numbers
//  * strings → saare strings
//  * booleans → saare booleans

// function seperateTypes(...arr) {
//     let numbers = [];
//     let strings = [];
//     let booleans = []
//     arr.forEach((val) => {
//         if (typeof val === "number") {
//             numbers.push(val)
//         }
//         if (typeof val === "string") {
//             strings.push(val)
//         }
//         if (typeof val === "boolean") {
//             booleans.push(val)
//         }
//     })
//     return { numbers, strings, booleans }
// }

// console.log(seperateTypes(1, 2, 3, "Waleed", "Car", true))



// filterByType ==> Ek function filterByType(type, ...args) banao.

// Pehla argument hoga type → "number", "string", ya "boolean".
// Baaki jitne arguments aaye, unme se sirf wahi values return karni hain jo type ke match karte ho.

// function filterByType(type, ...args) {
//     return args.filter(val => typeof val === type)
// }
// console.log(filterByType("number", 32, 42, "sd"))
// console.log(filterByType("string", 32, 42, "sd"))


// Function me numbers pass honge → ...nums
// Hume calculate karna hai:
// even numbers ka sum
// odd numbers ka sum
// Return ek object jisme { even: sumEven, odd: sumOdd }

// function sum(...nums) {
//     let evenSum = 0;
//     let oddSum = 0;
//     nums.forEach((n) => {
//         if (n % 2 === 0) evenSum += n
//         else oddSum += n
//     })
//     return { "even": evenSum, odd: oddSum }
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9))



// function greet(name){
//     console.log("Hello " + name)
// }

// function processUser(name,callback){
//     console.log("Processing user...")
//     callback(name)
// }
// processUser("Waleed", greet)


// function sayHello(name) {
//     console.log(`Hello ${name}`)
// }
// function welcomeUser(name, callback) {
//     console.log("Processing...")
//     callback(name)
// }
// welcomeUser("Waleed", sayHello)


// function double(num) {
//     console.log(num * 2)
// }
// function processNumber(num, callback) {
//     console.log("Processing number");
//     callback(num)
// }
// processNumber(5, double)


// function makeCoffee(callback) {
//     console.log("Making your coffee...")
//     callback()
// }

// makeCoffee(function serveCoffee() {
//     console.log("Your coffe is ready!")
// })


// function downloadFile(filename, downloadKro) {
//     console.log("Downloading " + filename);
//     downloadKro("Jungle");
// }

// function onDownloadComplete(file) {
//     console.log(file + " Download complete!");
// }

// downloadFile("Jungle", onDownloadComplete);



// function bookTicket(movie, callback) {
//     console.log(`Booking ticket for ${movie}`)
//     callback(movie)
// }
// function ticketReady(movie){
//     console.log(`Your ticket for ${movie} is ready!`)
// }
// bookTicket("Fast & Furious 7", ticketReady)


// function washClothes(clothes, callback) {
//     console.log(`Washing ${clothes}...`)
//     callback("Coat")
// }
// function clothesReady() {
//     console.log(`Your Coat are ready!`)
// }
// washClothes("Coat", clothesReady)


// function carReady(car) {
//     console.log(`Your ${car} is reday to drive!`)
// }

// function serviceCar(car, callback) {
//     console.log(`Servicing ${car}...`);
//     callback(car)
// }


// serviceCar("alto", carReady)


