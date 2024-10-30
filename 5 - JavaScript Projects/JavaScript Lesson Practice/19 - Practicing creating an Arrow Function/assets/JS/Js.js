// In order to create an Arrow Function we must
// Write the parameter
// Put the glued equal-greater|=>|operator to the right of the parameter
// Put the code, That you wanted to store as a value in the function, to the right of the glued equal-greater|=>|operator
// And finaly, We store this entire code in a variable, Setting it as the Custom Function


const favorite_color = color => console.log(`My favorite color is: ${color}`)

favorite_color(`Red`)


// You can store multiple codes in the function, By instead putting them inside a curled brace rather than to the right of the glued equal-greater|=>|operator.
const favorite_clothes = cloth => {

    // I don't need these codes interacting with other values, variables, etc...., So I won't use the return ; keyword.
    if (typeof cloth === typeof `need a string`) {
        console.log(`My ${cloth} is the thing I wear the most.`)
    }
    else {
        console.log(`You're mistaking ${cloth} with actual clothing`)
    }

}

favorite_clothes(`T-Shirt`)