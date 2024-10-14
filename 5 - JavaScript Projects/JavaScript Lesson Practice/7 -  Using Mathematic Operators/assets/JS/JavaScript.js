


// The 1st mathematical operator we have is +
const favorite_number = 7;

const my_age_yesterYear = 20;

console.log(favorite_number + my_age_yesterYear + 10) // The result must be 37
// And as normally you would expect, You can add either number data types or variables storing 
// number data types to each other


// But you can also add string data types, Or variables storing string data types to each other
const kevin_quote = "You must treat a car like you treat a woman.";

const good_insult = "You worthless insignificant pile of repugnance, you dare call yourself human?";

console.log(kevin_quote + good_insult)
// Now you must now that this equation doesn't cause there to be any space between the words, So either add a " " value between them, Or add a variable storing " " between them

let empty_space = " "

console.log(kevin_quote + empty_space + good_insult)// This is the altered version

// The 2nd operator is - which..... Yeah it works no differently than normal math, No extra thing with subtracting texts or anyhing

console.log(my_age_yesterYear - favorite_number)// The result will be 13

// And then there are off course all the other math staples:

// Multiply : *
console.log(my_age_yesterYear * favorite_number)// The result must be 140

// Divide : /
console.log(my_age_yesterYear / favorite_number)// The result must be rougly 3

// Power : **
console.log(4 ** 3)// The result must be rougly 64

// But where things get weird is with variable exclusive mathematical operators.

// The first one is +=, Which as usual add the values to the variable, BUT then sets the resulting value as the one stored inside the variable.
// Just know that this operator can't be applied to variables that have been created with const keyword, As that by DEFINITION can;t have += applied to it
let my_age = 20

const passing_years = 4

my_age += passing_years// Now the value of the my_age variable will be 24 from line 24 onwrads
console.log(my_age)


// And then there's -=, Which.... Is basicly += but with subbtraction
my_age -= 10// As the value my_age has been set to 24, This will result in it being set to 14
console.log(my_age )


// *=, Which is += but with multiplication
my_age *= 3// Thanks to the value in my_age being set to 14, Now it will be set to 42 as a result
console.log(my_age)


// /=, Which is += but with dividing
my_age /= 21// Thanks to the value in my_age being set to 42, Now it will be set to 2 as a result
console.log(my_age)


// There's also a power **= varient. 
my_age **= 4// value in my_age has been set to 2, Now it will It will be set to 16 as a result
console.log(my_age)


// And the lasts, And certainly not leasts are:

// ++ : Which add a 1 value, And then ALSO sets the result as the value stored IN our variable
my_age ++// The value was set to 16, It will now be 17 thansk to the equation
console.log(my_age)



// -- : Which subtracts a 1 value, And then ALSO sets the result as the value stored IN our variable
my_age --// The value was set to 17, It will now be 16 thansk to the equation
console.log(my_age)

my_age --// The value was set to 16, It will now be 15 thansk to me repeating the equation so you could actually see the diffrents
console.log(my_age)