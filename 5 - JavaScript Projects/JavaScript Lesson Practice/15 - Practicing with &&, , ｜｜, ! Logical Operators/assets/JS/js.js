// We use Logical Operators to set up multiple conditions in the brace|()| of our condition statements. (Naturally
// Logical Operators have not usefull for else{})

// &&: The fisrt basic of these Logical Operators, It makes sure that ALL of our conditions are met, Otherwise it 
// will not allow our code (That we put in the curled brace) to be executed.
const age = 19
const sanity = true

if(18 <= age < 23 && sanity === true) {
    console.log(`At ${age} You're nearly an adult, And thankfully sane....
Let's see how long that lasts`)
}
// If I change the values of sanity to be anything BUT true, The massage will not appear in the console tab. Even 
// though I made no changes to the age variable

console.log(`
`)
// Just for putting space between the codes

// || : The second basic Logical Operator, It makes sure that at LEAST one of our conditions is met.
const cloth_color = `blue`
const favorite_color = `red`

if(cloth_color === `Brown` || favorite_color === `red`) {
    console.log(`You! my friend, Have good taste.`)
}
// the first condition isn't met, But the second is, Thus the code in the curled brace|{}|is executed.

console.log(`
`)
// Just for putting space between the codes

// ! : The last basic Logical Operator, It allows us to invert the Boolean Value of our conditions. We apply this
// to the values, varaibles, And the values and variables alongside operators and functions
const my_adult_status = true

if(!my_adult_status === false){
    console.log(`You're not an adult yet`)
}
// The value that was stored was truem Thanks to the ! operator, That stored value turned to false, Resulting in
// the activation of the code,
 