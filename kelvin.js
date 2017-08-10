//Kelvin value
const kelvin = prompt('What is the Kelvin temperature today?');

//Kelvin to Celsius
const celsius = kelvin - 273;

//Fahrenheit to Celsius
let fahrenheit = celsius * (9/5) + 32;

//round Fahrenheit
fahrenheit = Math.floor(fahrenheit);

//interpolation
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);