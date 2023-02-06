/* 
    1. Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/

let burgers = 4
let fries = 1
if (burgers >= 4 && fries >= 1) {
    console.log("Ми поїли")
} else {
    console.log("Ми йдемо в інше кафе")
}

/*  
    2. Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/
let price = 1900
if (price >= 1000 && price <= 1900) {
    console.log("Price is: " + price)
} else {
    console.log("Price is out of range")
}

/*  
    3. Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/

//solution with '!'
let price1 = 1901
if (!(price1 >= 1000 && price1 <= 1900)) {
    console.log("Price is NOT between 1000 and 1900")
} else {
    console.log("Price is in range between 1000 and 1900")
}

//solution without '!'
let price2 = 1901
if (price2 < 1000 || price2 > 1900) {
    console.log("Price is NOT between 1000 and 1900")
} else {
    console.log("Price is in range between 1000 and 1900")
}

/*
4. За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
Результат виводити в консоль.
*/
let season = 4
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

/*
    5. Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/

let a = 2
let b = 0
let c = 1
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


/*  6. Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/
let weekdayNumber = 5
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

/*
    7. За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/

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

/*
    8. Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/

let word = "I love you"
const myRegular = /[aeyiou]/gi
let wordNoVowels = word.replace(myRegular, "")
console.log("Word without vowels: " + wordNoVowels)


/*  9. Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закнченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/

let metr = 5000
let kilometr = metr / 1000
function metryToKilometry(number) {
    
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
console.log(metr + " метр" + metryToKilometry(metr) + " = " + kilometr + " кілометр" + metryToKilometry(kilometr))