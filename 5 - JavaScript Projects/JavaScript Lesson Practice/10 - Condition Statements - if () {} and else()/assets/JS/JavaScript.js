// Condition statements are pieces of code that allow us to set condition before our code is executed

// if() {}: We set the initial condtions By putting the values, variables.etc.... in the brace(), And the action for if 
//the condition is met by putting the values, variables.etc.... in the curled brace{}

const my_age = 20;

const borther_age = 17;

const driving_age = 18;

if(my_age >= driving_age){
    console.log("I am old enough to drive")
}
// Just be sure to not create a variable in the curled brace {} of if or store value to a variable that you've not already created outside if(){}

if(borther_age>= driving_age){
    console.log("Masiha is old enough to drive")
} else{
    console.log("Masiha is not old enough to drive")
}
// else{}; Placed in the same line after the closing curled brace {} of if(){}, We put values, variables.etc.... in the curled brace {} of else {} so an action 
// is performed in the case that the condition set in the brace () of if(){} aren't met

