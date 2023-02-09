// + - конкатенация или сложения чисел
console.log('qwe' + '123')
console.log(123 + 111)
console.log(2 + '123')

//инкремент и декремент
//постфиксная форма - выводит в консоль, потом добавляет одиничку (обычная форма сначала добавляет, а потом выводит)
let incr = 10
let decr = 10

console.log(incr++)
console.log(decr--)

console.log(++incr)
console.log(--decr)

//операторы сравнения
console.log(5 < 2)
console.log(5 % 2) //остача от деления

console.log(2 * 4 = 8) //одно равно это присваивание, а не сравнение!
console.log(2 * 4 == 8) //вернет true or false

console.log(2 * 4 === 8) //cтрогое сравнение убирает привидение типов - true
console.log(2 * 4 === '8') //cтрогое сравнение убирает привидение типов - false

//условные операторы  (0, null, undefined,"", NaN - всегда false)
let isChecked = false
let isClosed = true
console.log(isChecked && isClosed) // && - and (возвращает true только когда обе переменные будут true)
console.log(isChecked || isClosed) // || - or (возвращает false только когда обе переменные будут false)

// ! - не (превращает true на false)
console.log(!isChecked && !isClosed) 
console.log(isChecked || isClosed)  


//task1: я хочу купить гамбургер и картошку, если оба товара есть в наличии, я их покупаю и буду сытым

let hamburger  = false
let fries = true
if(hamburger && fries){
 console.log('Я наелся')    
}
console.log(hamburger && fries) //это просто посмотреть что возвращается

//task2: либо 3 гамбургера и 2 колы, либо 2 нагетса и 2 картошки
let burgers = 0
let cola = 0
let nuggets = 0
let fries2 = 2
if(burgers > 3 && cola > 0 || nuggets > 1 && fries2 > 1){
    console.log("Все наелись")
}

