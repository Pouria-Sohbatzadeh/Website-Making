// In order to create a Function expression we must:
// Put the function keyword to the left of a glued brace and curled brace (In that order)
// Then put the parameters in the brace
// Then store the codes that we want to store in the function, By putting them in the curled brace
// At last, We store everything in a variable, Setting it as the function.

const name_sayer = function (name){

    return console.log(`Today's celebration is for ${name}`)
    
}

alert(name_sayer(`John`))// If the code you store in the function is the result of a function, The data type of our custom function will be shwon as undefined

// I will repeat the ConvolverNode, Just without storing the console.log() function in the custom function

const name_sayer_2 = function(name) {
    return `Today's god awful occasion is for ${name}`
}

console.log(name_sayer_2(`Pouria`))
