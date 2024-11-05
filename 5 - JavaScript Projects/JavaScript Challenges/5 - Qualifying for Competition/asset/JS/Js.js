// Write a custom function called canJoinCompetition that takes in two parameters:

// age (a number)
// hasConsent (a boolean)
// The function should determine if a person is eligible to join a competition based on the following conditions:

// If the person is 18 years or older, they can join the competition regardless of hasConsent.
// If the person is between 13 and 17 years old, they can join the competition only if hasConsent is true.
// If the person is under 13, they cannot join the competition.
// The function should return a string based on the result:

// "Eligible to join" if they can join.
// "Eligible with consent" if they can join with consent.
// "Not eligible to join" if they cannot join.

// Notes of ChatGPT: Be even MORE descriptive with the name you set as the Custom Function
function qualification(age, agreed){
    if(age >= 18) {
        return `Can Join the competition`
    }

    else if(13 <= age && age <= 17 && agreed === true){
        return `The Athlete Can Join the competition if he wants to`
    }
    else if(13 <= age && age <= 17 && agreed === false){
        return `The Athlete Can Join the competition, However, He doesn't want to`
    }
    else if(age < 13){
        return `The Athlete is too young to join the competition`
    }
}

console.log(qualification(17, true))