// The Function Declaration is default way of creating a function.

// We put the function keyword to the right of the name we want to set as the function, Then we glue a brace and curled brace to the right of the name we set as the function.
// Inside the brace we put the parameters, Stand ins for the values that must be put in the brace of the function before it executes its stored code.
function three_multiply_calculator(your_number) {
    // We store the code in the curled brace, Utilizing the value(s) the user gave us.
    const multiplied_by_three = your_number * 3
    console.log(multiplied_by_three) // I don't know why this is being executed NOW.

    // In order to make the stored code of the function visible, I will put my custom function in the brace of console.log(), And then put the value (The quantity of which I 
    // determined with the number of the parameters), In the brace of my custom function
}


// However, If you attempt have a custom function interact with other values, variables, operators or functions, Its stored codes will not be executed, And the data type of
// The function will be shown as undefined
console.log(`The reason this value ${three_multiply_calculator(10)} is shown as "undefined" becuase my custom function can't ineract with other functions`) // 10*3 = 30

// Invoking the Custom Function alone however allows the stored codes to be executed normally.
three_multiply_calculator(4) // 4*3 = 12



// Oh also, You can repeat the same parameters names, But don't do it, It will confuse you.
function multiplied_by_4_calculator(a_number) {
    const multiplied_by_four = a_number * 4
    // In order for the value that we calculated to be aknowleged outside of the curled brace of the custom function, You must put the code (Which in this case is a variable) to 
    // the left of the semicolon of the return ; keyword    
    return multiplied_by_four;
}

// Now when I use the function, It works!
console.log(`This is what a custom function with the return ; keyword looks like, Its value ${multiplied_by_4_calculator(5) + 10} acknowledged and capable of interacting with other function: `) // 5*4 + 10 = 30

console.log(`
`)// Just for spacing the codes

// Without setting any parameteres however, The code that you stored in the custom function will be executed as sool as the custom function is invoked
function count_to_20() {
    console.log("1, 2, 3, 4, 5, 6,......, 16, 17, 18, 19 ,20")
    // I don't need this function to interact with anything, Thus I won't use the return ; keyword.
}

// Just don't forget the brace to activate the custom function
count_to_20()
