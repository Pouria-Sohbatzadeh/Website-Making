// The formula for calculating the BMI of someone is : Mass / height ** 2 
// The second formula for calculating the BMI of someone is : Mass / (height * height)
// Mass is measured in Kilograms in this case.



// What you have to do is:
// Store their height and width in a variable
// calculate their BMI using one or both of the formulas and, 
// see whether Mark has a higher BMI than John


// Situation 1 - Mark wieghted 78kg and was 1.69m tall,
// While john was 92kg and 1.95m tall

let mark_height = 1.69;
let mark_mass = 78;

let john_height = 1.95;
let john_mass = 92;

// I'm using the : Mass / (height * height) formula to calculate their BMI
let mark_bmi = mark_mass / (mark_height * mark_height);
console.log("The BMI of Mark")//Stating the person who this variable belongs to
console.log(mark_bmi)


let john_bmi = john_mass / (john_height * john_height);
console.log("The BMI of John")//Stating the person who this variable belongs to
console.log(john_bmi)

let bmi_comparison = mark_bmi > john_bmi;// Now we will see whether Mark has a higher BMI or not
console.log("Making sure that Mark has a higher BMI than John")// Makes it clear what the value shown in inspect is for
console.log(bmi_comparison)
console.log("He does have a higher BMI")


// Situation 2 - Mark wieghtes 95kg and was 1.88m tall,
// While john was 85kg and 1.76m tall

mark_height = 1.88;
mark_mass = 95;

john_height = 1.76;
john_mass = 85;

// I'm using the : Mass / (height * height) formula to calculate their BMI
mark_bmi = mark_mass / (mark_height * mark_height);
console.log("The 2nd BMI of Mark")//Stating the person who this variable belongs to
console.log(mark_bmi)


john_bmi = john_mass / (john_height * john_height);
console.log("The 2nd BMI of John")//Stating the person who this variable belongs to
console.log(john_bmi)

bmi_comparison = mark_bmi > john_bmi;// Now we will see whether Mark has a higher BMI or not
console.log("Making sure that Mark's 2nd BMI is higher than John")// Makes it clear what the value shown in inspect is for
console.log(bmi_comparison)
console.log("He doesn't have a higher BMI with the new measurments")