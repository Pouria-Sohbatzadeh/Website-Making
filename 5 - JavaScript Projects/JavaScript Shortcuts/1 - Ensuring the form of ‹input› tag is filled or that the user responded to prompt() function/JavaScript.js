let name_form = prompt(`What's your name`)

// The condition and action for the prompt() function being answered to
if(Boolean(name_form) === true) {
    alert(`${name_form}.... Sounds like a good name`)
} 
// The condition and action for the prompt() function not being answered
else if(Boolean(name_form) === false){
    alert(`Fill the form to countinue`)
}