const result_of_5_x_10 = 5 * 10

console.log(result_of_5_x_10 !== 50)

// The way you set up multiple conditions for if(){} and else if(){} is by simply seperating each condition from each
// other using the brief pause|,|symbol. Observe:
if(result_of_5_x_10 !== 50 && typeof result_of_5_x_10 !== Number) {
    alert(`${result_of_5_x_10} is the wrong answer`)
}
// The result of the two conditions is false, Thus the code in the curled brace|{}| of if(){} isn't executed. and
// the code in else{} is.
else {
    alert(`${result_of_5_x_10} is the correct answer`)
}