// First we create a function for this Proof testing.

function announce(husband, wife){
    console.log(`Congragulation on our Anniversary Mr.${husband} and Mrs.${wife}`)

    console.log(4 + 10)
}

// As you will see, The line that is shown for the activation of the console.log()s, Will be 4 (Congragulation texts) and 6 (math equation)
announce()

// This is the case Custom Functions that have return ; in them as well.

function multiply_then_sum(multiplied_num,multiplier_num, sum_num) {
    return multiplied_num * multiplier_num + sum_num
}

console.log(multiply_then_sum(5, 6, 10)) // 5 * 6 + 10 = 70