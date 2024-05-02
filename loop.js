for (let i = 0; i <= 8; i++) {
    console.log("Hai " + i)
}

let i = 0
while (i <= 8) {
    console.log("Hai " + i)
    i++
}

let k = 5
while (k < 5) {
    console.log("Hai")
    k++
}

do {
    console.log("Hai do While")
} while (k < 5);


let j = 0
while (true) {
    console.log(j)
    
    if (j === 10) break

    j++
}


for (let i = 0; i < 5; i++) {
    if (i == 3) continue // continue itu di skip angkanya
    console.log(i)
}