//if-else
if (4 == 0) {
    console.log('it is true')
}

if (4 == 0) {
    console.log("it is true")
} else {
    console.log('It it false')
}

let num = 5
if (num < 6)
{
    console.log('less than 6')
}
    else if (num > 100){
console.log('greater than 6')
    }
    else{
        console.log('ok')
    }

//тернарный оператор --- (true)? console.log("ok"): console.log("error")
let num2 = 20;
(num2 === 20) ? console.log("ok"):console.log('error')


//switch-case
let num4 = 56
switch (num4) {
    case 49:
        console.log('49')
        break
    case 50:
        console.log('50')
        break
    case 51:
        console.log('51')
        break
    default:
        console.log('default output') //выполнится, если ни один из case не подходит
        break
}