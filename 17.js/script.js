// console.log(4 + 2 +'5' + 2 + 'a')
let x = 12;
let y = 5;
let z = x * y;
console.log(z);
x = 10;
y = 2;
console.log(x/y)
let num1 =20
let num2 = 17 
console.log(num1 + num2);
let name = "Raya"
let surname = "Eliyeva"
let year = 2001
let info = name+ surname+ year
console.log(info)
console.log(17%12)
let cityName = "Baku"
cityName = "Ganja"
console.log(cityName)

let obj1 = {
   name: "Raya",
   surname:  "Eliyeva",
    Age: 21
}

console.log (obj1)
let obj2 = obj1 
console.log(obj2)

let obj = {
    cityName: "Baku",
    uni: "Ganja",
    quali: "Math-Inf"
}

let raya={...obj}

raya.cityName="london"

console.log(raya);