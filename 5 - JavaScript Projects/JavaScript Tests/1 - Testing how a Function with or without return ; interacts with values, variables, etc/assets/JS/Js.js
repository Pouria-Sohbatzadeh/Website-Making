// Let's see how a function with the return ; keyword interacts with other functions, operators, values and variables.

function phone_number(phone_number){
    const complicated_number = phone_number + 10
}

console.log(phone_number(0915) + 20)
// the stored code can't ineract with code expressions, Being shown as Nan.

console.log(phone_number(09159399429))
// Nor with code statements, Being show as undefined.

// The function without return can only work when applied alone.

function congragulation(your_name){
    console.log(`${your_name} IS MAGNIFICENT!`)
}

congragulation(`John`)

// Return, Our code can interact with both code statements and code expressions (Excluding any statement code stored as a value, Which can't interact with anything) 




