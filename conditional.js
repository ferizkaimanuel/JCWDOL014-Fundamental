let age = 21
if (age >= 17){
    console.log("You can now create an ID card")
} else {
    console.log("You are not enough to create an ID card")
}

let grade = "B"
if (grade === "A") {
    console.log("Excellent Result!")
} else if (grade === "B") {
    console.log("Great Result!")
} else if (grade === "C") {
    console.log("Average Result!")
} else {
    console.log("Invalid Result!")
}


let now = new Date()
let day = now.getDay() // 2

switch (day) {
    case 0:
        console.log("Minggu")
        break
    case 1:
        console.log("Senin")
        break
    case 2:
        console.log("Selasa")
        break
    case 3:
        console.log("Rabu")
        break
    case 4:
        console.log("Kamis")
        break
    case 5:
        console.log("Jumat")
        break
    default:
        console.log("Sabtu")
}

let a = ""
if (a) {
    console.log(true)
} else {
    console.log(false)
}

let str = "purwadhika"
console.log(str.length) // untuk cek isi nilai dalam huruf

let x = 6
y = 3
if (x < 10 && y > 1) {
    console.log(true)
} else {
    console.log(false)
}

let kata = "Jawascript"
console.log(kata === "Javascript" ? "Javascript" : "not Javascript")

