
//циклы while and do-while в cypress не работают!

//цикл while
while (num < 85) {    //infinitive loop
    console.log(num)
}

let num = 80
while (num < 85){
    console.log(num)
    num++
}

// цикл do - while
let num2 = 80
do {
    console.log(num2)
    num2++
} while (num2 < 85)

//цикл for
for (let i = 1; i < 8; i++) {
    console.log(i)
}

let num3 = 80
for (let i = 1; i < 8; i++) {
    console.log(num3)
    num3++
}

let num4 = 80
for (let i = 1; i > 0; i++) { //infinitive loop in 'for' cycle
    console.log(num4)
    num4++
}

//прерывание цикла
let num5 = 80
for (let i = 1; i < 8; i++) {
    if (num5 === 85) {
        break
    }
    console.log(num5)
    num5++
}

//пропустить итерацию
let num6 = 80
for (let i = 1; i < 8; i++) {
    if (i === 5) {
        continue
    }
    console.log(i)
}

//цикл в цикле
for (let i = 0; i < 3; i++) {
    console.log(i + 'i')

    for (let j = 0; j < 3; j++) {
        console.log(j + 'j')
    }
}