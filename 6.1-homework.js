//1
const eatInMac = (burgers, fries) =>{
if (burgers >= 4 && fries >= 1) {
    console.log("Ми поїли")
} else {
    console.log("Ми йдемо в інше кафе")
}
}
eatInMac(4, 1)

//2
const priceInRange = (price) =>{
if (price >= 1000 && price <= 1900) {
    console.log("Price is in range: " + price)
} else {
    console.log("Price is out of range")
}
}
priceInRange(1900)

//3
//solution with '!'
const priceIsNotInRangeWithNo = (price) =>{
if (!(price >= 1000 && price <= 1900)) {
    console.log("Price is NOT between 1000 and 1900")
} else {
    console.log("Price is in range between 1000 and 1900")
}
}
priceIsNotInRange(1900)

//solution without '!'
const priceIsNotInRangeWithoutNo = (price) =>{
if (price < 1000 || price > 1900) {
    console.log("Price is NOT between 1000 and 1900")
} else {
    console.log("Price is in range between 1000 and 1900")
}
}
priceIsNotInRangeWithoutNo(1901)

//4
const seasonByNumber = (season) =>{
if (season === 1) {
    console.log("Winter")
} else {
    if (season === 2) {
        console.log("Spring")
    } else {
        if (season === 3) {
            console.log("Summer")
        } else {
            if (season === 4) {
                console.log("Autumn")
            } else {
                console.log("Not a season")
            }
        }
    }
}
}
seasonByNumber(1)

//5
const averageNumber = (a, b, c) =>{
if (a < b && b < c) {
    console.log("B is average: " + b)
} else if (a < b && b > c && a < c) {
    console.log("C is average: " + c)
} else if ((a < b && b > c && a > c)) {
    console.log("A is average: " + a)
} else if (a > b && a < c) {
    console.log("A is average: " + a)
} else if (a > b && a > c && b < c) {
    console.log("C is average: " + c)
} else if (a > b && a > c && b > c) {
    console.log("B is average: " + b)
} else {
    console.log("Some of values are equal")
}
}
averageNumber(2, 0, 1)


//6
const weekdayNameByNumber = (weekdayNumber) =>{
switch (weekdayNumber) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log('Not a weekday')
        break
}
}
weekdayNameByNumber(1)

//7
let number1 = 0
let number2 = 0.2
let operator = "+"
switch (operator) {
    case "+":
        console.log(number1 + " + " + number2 + " = " + (number1+number2))
        break
    case "-":
        console.log(number1 + " - " + number2 + " = " + (number1 - number2))
        break
    case "*":
        console.log(number1 + " * " + number2 + " = " + (number1 * number2))
        break
    case "/":
        console.log(number1 + " / " + number2 + " = " + (number1 / number2))
        break
    default:
        console.log('Not a math operator')
        break
}

//8
const removeVowels = (words) =>{
const myRegular = /[aeyiou]/gi
let wordsNoVowels = words.replace(myRegular, "")
console.log("Word without vowels: " + wordsNoVowels)
}
removeVowels("I love you")

//9
const metryToKilometry = (metr) =>{
let kilometr = metr / 1000
function addingEnding(number) {
    
    if (number === Math.round(number)) {
        if (number >= 5 && number <= 19) {
            return "ів"
        } else if (number % 10 === 1) {
            return " "
        } else if (number === 2 || number === 3 || number === 4 || (number % 10 >= 2 && number % 10 <= 4)) {
            return "и"
        } else if (number % 10 === 0 || number % 10 >= 5 && number % 10 <= 10) {
            return "ів"
        }
    }
    else {
        return "a"
    }
}
console.log(metr + " метр" + addingEnding(metr) + " = " + kilometr + " кілометр" + addingEnding(kilometr))
}
metryToKilometry(5000)