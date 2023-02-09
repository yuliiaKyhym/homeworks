let number = 5
const userScore = 2000

//camelCase - for variables
//snake_case - for variables
//UPPER_SNAKE_CASE - for constants
//kebab-case - for directories name
//PascalCase - for classes


console.log(number)


//прямых констант в js не существует
let number2 = 5
const userScore2 = 2000

number2 = 10
console.log(number2)

userScore2 = 10  //нельзя давать новое значение константам
console.log(userScore2)
const obj = {
    age: 20
}

//нельзя поменять значение объекта таким образом
obj = 5   
console.log(obj)

//правильный способ поменять значение объекта
obj.age = 44
console.log(obj)

//var
var oldVariable = 'Dima'
oldVariable = 'Yuliia'
console.log(oldVariable)

//var vs let  (var - устареший вариант, существуют в памяти до инициализации в коде, а let не существует до иниц-ции)
console.log(firstName1)
let firstName1 = 'Name'
var firstName = 'SomeName'

//область видимости - let не виден вне блока
{
    let result = 50
}
console.log(result)

//область видимости - var виден вне блока
{
    var result = 50
}
console.log(result)

