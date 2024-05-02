let celcius = 60
let convertedToFahrenheit = (celcius * 9/5) + 32

console.log(convertedToFahrenheit)


let num1 = 25
if (num1 % 2 == 0) {
    console.log("Even")
} else {
    console.log("Odd")
}
let num2 = 2
if (num2 % 2 == 0) {
    console.log("Even")
} else {
    console.log("Odd")
}
const number = 10 // by lecturer n % 2 = 0

const result = number % 2
console.log(result == 0 ? "even number" : "odd number")


let prime = 1303
if (prime <= 1) {
    console.log("bukan bilangan primer")
} else if (prime <= 3) {
    console.log("bilangan primer")
}

if (prime % 2 === 0 || prime % 3 === 0) {
    console.log("bukan bilangan primer")
}

for (let i = 2; i < prime; i++) {
    if (prime % i === 0) {
        console.log("bukan bilangan primer")
        break
    } 
}
console.log("bilangan primer")


let Number = 5 // by lecturer
let pembagi = 0

for (let i =1; i <= Number; i++) { // 1, 2, 3, 4, 5, 6, 7
    if (Number % i === 0) {
        pembagi++
    }
}
console.log(pembagi == 2 ? "Prime number" : "Not prime number")



// Write a code to find the sum of the numbers 1 to N
// 5 => 1 + 2 + 3 + 4 + 5

let n = 5 // by lecturer
let Result = 0

for (let i = 1; i <= n; i++) {
    Result += i
}
console.log(Result)


// Write a code to find factorial of a number
// 6! => 6 x 5 x 4 x 3 x 2 x 1

let N = 6 // by lecturer
let hasil = 1

for (let i = N; i > 0; i--) {
    hasil *= i
}
console.log(hasil)


// Write a code to print the first N Fibonacci numbers
// 0 1 1 2 3 5 8 13 21 34 ....

let z = 15 // harusnya ada di 610
let a = 0
let b = 1
let nextNumber = 0

for (let i = 1; i < z; i++) {
    nextNumber = a + b // harusnya hasil tambah = 1
    a = b
    b = nextNumber
}

console.log(b)