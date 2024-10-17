// I'm going to mostly copy the code that I wrote for calculating BMI in the last challenge
// The difference now is that I have to use if(){} and else{} condition statements to write a code for a situation where Mark's BMI is higher than John, Or where it's lower
// And also to use back tics to make the text for "who the BMI belongs to: look better.


// Situation 1 - Mark wieghted 78kg and was 1.69m tall,
// While john was 92kg and 1.95m tall

let mark_height = 1.69;
let mark_mass = 78;

let john_height = 1.95;
let john_mass = 92;

// I'm using the : Mass / (height * height) formula to calculate their BMI
let mark_bmi = mark_mass / (mark_height * mark_height);
console.log(`The BMI of Mark is ${mark_bmi}`)


let john_bmi = john_mass / (john_height * john_height);
console.log(`The BMI of John is ${john_bmi}`)

// The main change in code start here, Right after the BMI of John is stated in my previous code
if(mark_bmi > john_bmi) {
    console.log(`Mark's BMI (${mark_bmi}) is higher than John's (${john_bmi})`)
} else {
    console.log(`John's BMI (${john_bmi}) is higher than Mark's (${mark_bmi})`)
}

console.log(`
`)

console.log(`Three Months has passed~
`)



console.log(`
`)
// Just to put space between the code of the two situations



// Situation 2 - Mark wieghtes 95kg and was 1.88m tall,
// While john was 85kg and 1.76m tall

mark_height = 1.88;
mark_mass = 95;
mark_bmi = mark_mass / (mark_height * mark_height);//Need to remind JavaScript to Redo the calculations with the new values

console.log(`The BMI of Mark after 3 months is ${mark_bmi}`)// The BMI has changed thanks to mass and height changing


john_height = 1.76;
john_mass = 85;
john_bmi = john_mass / (john_height * john_height);//Need to remind JavaScript to Redo the calculations with the new values

console.log(`The BMI of John after 3 months is ${john_bmi}`)// The BMI has changed thanks to mass and height changing


if(mark_bmi > john_bmi) {
    console.log(`Mark's BMI (${mark_bmi}) is higher than John's (${john_bmi})`)
} else {
    console.log(`John's BMI (${john_bmi}) is higher than Mark's (${mark_bmi})`)
}

