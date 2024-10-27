let user_name = prompt(`What's your name?`)

if(user_name === `Johnny`) {
    alert(`The Superhero that you share a name with is Ghost Rider`)
}
// We can use the else if(){} condition statement, To be able to have a better control over all the possible 
// outcomes, Unlike else{} which can only account for the possiblity of the condition of if(){} not being met.
else if(user_name === `Peter`) {
    alert(`You share a name with Spider-Man`)
}
else if (typeof user_name === typeof `name`) {
    alert(`Althrough this is a name, I don't know which Super Hero you share a name with`)
}

