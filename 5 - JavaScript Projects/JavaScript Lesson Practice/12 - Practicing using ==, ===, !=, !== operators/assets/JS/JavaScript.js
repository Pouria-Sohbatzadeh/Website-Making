// First let me make a couple of variables to compare to each other.

const full_name = `Pouria Sohbatzadeh`

const shortened_name = `Pouria`


const written_age = `20`

const age = 20

// The first two operators determine whether the values are equal or not
// Now for the operators, Starting with ==

console.log(written_age == age)// `20` == 20
// What this operator does change the data type of the value/stored vakue and THEN compare the values/stored values
// Which in this instances causes the two to be considered equal, Thus resulting in true
// However this CAN cause bugs so do not rely on this operator


// The next operator is ===

console.log(written_age === age)// `20` === 20
// This operator just compares values/stored values to each other. And thanks to the two values NOT sharing the same
// value, They aren't equal, Thus resulting in false

// The last two operators determine whether the values/stored values AREN'T equal or not 
// Starting with !=

console.log(shortened_name != full_name)// `Pouria` != `Pouria Sohbatzadeh`
// Much like == operato, The data type changes to be the same, Before determining whether the two are 
// not equal or not, This again causes bugs so Don't rely on != operator
// In this case, Even with the fact that the two already have the same data type, Their values aren't the same, 
// Reulsting in a true value

// And last but not least is !== operator

console.log(age !== 18)// 20 !== 18
// Just compares the values/stored values and etermines whether they are NOT equal or not. Reliable
// In this comparison, the stored value (20) is not equal to 18, Resulting in true