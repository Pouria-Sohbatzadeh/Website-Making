// The functions that allow us to change the data type of values and stored values are:

// Number() : Changes the data type of strings to number, ONLY IF there only numbers inside the quotes |""|
const music_day = "19";
console.log(music_day, Number(music_day));// Here, the 1st one will be shown as a text (Colored White), But the second shown as a number (Colored Purple).

// If you attempt to use this on a string value or stored string value that has anything BUT numbers in its quotes, The result is an error of Nan (Not a Number)
const car_wheels = "a car has 4 wheels";
console.log(Number(car_wheels))



// String() : Changes the data type of any values and stored values to string
const PI = 3.14
console.log(PI, String(PI))
//The first is the variable normally, The second is the variable after being converted to a string (It's blue, But it's still considered a string by JavaScript)