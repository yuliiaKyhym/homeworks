/**
 * Существуют такие типы данных:
 *  - простые
 *  - объекты
 * 
 * Простые:
 *  - числа
 *  - текст
 *  - логичный тип (булевый)
 *  - null (когда что-то не существует / нет никакого значения)
 *  - undefined (когда что-то существует, но является пустым)
 *  - symbol
 *  - bigInt 
 * 
 * Объекты:
 *  - специальные объекты (или глобальные)
 *  - обычне объекты (или простые)
 * 
 * Специальные объекты: 
 *  - массивы
 *  - функции
 *  - объект даты
 *  - ошибки
 *  - регулярные выражения
 * 
 * Обычные (простые) объекты:
 *  - объект {}
 */

// число
let number = 5
let floatNum = 5.5

// типы данных, которые можно получить только после каких-то операций (infinity, NaN)
console.log(4 / 0) //infinity
console.log(3 * 'text') //NaN

//boolean 
let isExist = true
let isNotExist = false

//null + undefined
console.log(something) //получить undefined - просто вызвать то, чего не существует 

// null это конкретное значение, undefined - отсутствие значения 
let value = null
console.log(value)


//объект - запись 1
let obj = {}
let person = {
    name: "Yuliia",
    age: 26,
    isMarried: true
}
console.log(person)
console.log(`Возраст: ${person.age}`)  //такой вывод текста называется интерполяция - аналог конкатенации
console.log(`Имя: ${person.name}`)
console.log(`Женат: ${person.isMarried}`)


let endpoint = '/help'
let baseUrl = 'some-url'
console.log(`https://${baseUrl}/${endpoint}`)

// объект - запись 2 - json path
let person1 = new Object()
person1.name = "Andrew"
person1.age = 27
person1.isMarried = true
console.log(person1)

//массивы
let arr = []
let arr2 = ['text', "some text", 6, 'asas', {}, []]
console.log(arr2)
console.log(arr2[0])

// разница между массивом и объектом 
// 1 - вид записи
let numArr = [1,2,3] //просто упорядоченный список
let nubObj = {a:1, b:2, c:3} //запись ключ-значение

// 2 - в объектах можно выстроить связи (в массивах - нет)
let salary = {
    'Anna': 1000,  //можно писать ключи без ''
    'Vlada': 2000
}
let salaryArray = ['Anna', 1000, 'Vlada', 2000]


//почему массив это одна из радновидностей объекта (создали массив с помощью объекта)
let someArrObj = {
    0: 1,
    1: 2,
    2: 3
}
console.log(someArrObj[0])

//более сложная структура объекта
let someArrObj4 = {
    a: 1,
    b: 2,
    c: {
        name: "Yuliia",
        age: 26,
        isMarried: true
    },
    d: ['Anna', 1000, 'Vlada', 2000]
}
console.log(someArrObj4.c.age)
console.log(someArrObj4.d[2])


//свойста и методы для строк

let someText = " Hello wolrd! "
console.log(someText.length) //длинна строки
console.log(someText.substring(1,6)) //вырезать текст с 2го символа по 7
console.log(someText.toUpperCase()) //смена регистра на все с большой буквы
console.log(someText.toLocaleLowerCase()) //смена регистра на все с маленькой буквы
console.log(someText.indexOf('o')) //индекс первой найденной буквы 
console.log(someText.slice(0,2)) // =substring()
console.log(someText.trim()) //убирает пробелы в начале и в конце
console.log(someText.charAt(1)) //возвращает символ с индексом 1
console.log(someText[1]) //возвращает символ с индексом 1

//свойста и методы для массивов
let myArr = [1,2]
let myArr1 = []
myArr1.push("hello") //добавить элемент в массив
myArr1.push(" ")
myArr1.push("world!")
console.log(myArr1)

console.log(myArr1.length)
console.log(myArr1.join(" ")) // все элементы массива в одну строку и разделить пробелом
console.log(myArr1[myArr1.length -2]) //предпоследний элемент в массиве
console.log(myArr1.pop()) //удаляет последний элемент массива
console.log(myArr1.pop()) 

//свойста и методы для объектов (те же, что и для строк или чисел)
let someArrObj5 = {
    a: 1,
    b: 2,
    c: {
        name: "Yuliia",
        age: 26,
        isMarried: true
    },
    d: ['Anna', 1000, 'Vlada', 2000]
}
console.log(someArrObj5.c.name.length)


//свойста и методы для чисел
let n = 12.4
console.log(Math.round(n)) //округлить число (меньше 5 = 12, больше - 13)
let p = "12.6 px"
console.log(parseInt(p)) //превратить число из типа sting в целое число  типа int
console.log(parseFloat(p)) //превратить число из типа string в дробное число типа float

 
