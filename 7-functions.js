
function sum (a,b){
    let c = a + b
    console.log(c)
}
sum(3,10)

let a = 10 
let b = 20 

sum(a,b)


function myFun(a,b){
    let c = a + b
    
    return c
}

function someName(a,b){
    let c = a + b
    
    return c
}

//анонимные функции
function (a,b){
    let c = a + b
    return c
}

const anonimFunc = function(a,b)  //чтобы у анонимной функции было имя нужно присвоить эту фунцию переменной
{
    let c = a + b
    return c
}
anonimFunc(1,2)


//стрелочные функции () => {}  --- всегда анонимные

(a, b) => {
 
    let c = a + b 
    console.log(c)
}

const arrowFunc = (a, b) => { 
    let c = a + b 
    console.log(c)

}
arrowFunc(1, 2)


//дефолтные значение атрибутов (b = 3)
const funcWithDefaultParams = (a, b = 3) => {
    return (a * b)
}
console.log(funcWithDefaultParams(2))

//return as break
const playWithReturn = () => {
    for (let i = 0; i < 10; i++) {
        console.log(i)
        if (i === 6) {
            return       //работает аналогично break
        }
        console.log('end')   // это уже выполняться не будет
    }
}
playWithReturn()

//
console.log(Date())

const myRequestWithDate = (field1, addedAt = Date()) => {
    //...

    let requestBody = {
        someData: 1,
        someData2: 2,
        timestamp: ''
    }

    requestBody.someData = field1
    requestBody.timestamp = addedAt

    return requestBody
}

console.log(myRequestWithDate('qwe qwe'))