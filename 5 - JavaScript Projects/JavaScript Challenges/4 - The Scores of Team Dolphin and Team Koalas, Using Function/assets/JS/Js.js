// What you must do is:
// 1 - Create an Arrow Function to calculate the average of 3 scores.
// 2 - Use the Function to calculate the average of the teams
// 3 - Create a Function named checkWinner that takes the average score of the team and compares them 
// to each otherto see who won, And then decalres who won with console.log(), With the scores show 
// alongside the text. Example: `Team Dolphins won (30 vs. 10)`
// Rule : A team only wins if its avarage is thice as big as the avarage of the losing team, Otherwise,
// Both teams lose
// 4 - Ignore draws this

// Situation 1: 
// Dolphins Scores : 44, 23, 71
// Koalas Scores : 65, 54, 49



function average_score(score_1, score_2, score_3) {
    const average = (score_1 + score_2 + score_3) / 3
    return average
}



let dolphins_average = average_score(44, 23, 71) // (44 + 23 + 71) / 3 = 46

let koalas_average = average_score(65, 54, 49) // (65 + 54 + 49) / 3 = 56


function checkWinner(team1_average, team2_average){
    const team_1_name = `Dolphins`

    const team_2_name = `Koalas`

    if(team1_average >= team2_average * 2){
        console.log(`Team ${team_1_name} won ${team1_average} vs. ${team2_average})`)
    }

    else if(team2_average >= team1_average * 2) {
        console.log(`Team ${team_2_name} won (${team2_average} vs. ${team1_average})`)
    }

    else {
        console.log(`Nobody won due to lacking scores`)
    }
}

checkWinner(dolphins_average, koalas_average)// 46, 56 : Neither is more than two times bigger than the other, 
// Or just two times bigger  

// Situation 2: 
// Dolphins Scores : 85, 54, 41
// Koalas Scores : 23, 34, 27

dolphins_average = average_score(85, 54, 41) // (85 + 54 + 41) / 3 = 60

koalas_average = average_score(23, 34, 27) // (23 + 34 + 27) / 3 = 28

// if(dolphins_average >= koalas_average * 2) {
//     alert(`Dolphins won`)
// }


function checkWinner(team1_average, team2_average){

    const team_1_name = `Dolphins`

    const team_2_name = `Koalas`

    if(team1_average >= team2_average * 2){
        console.log(`Team ${team_1_name} won (${team1_average} vs. ${team2_average})`)
    }

    else if(team2_average >= team1_average * 2) {
        console.log(`Team ${team_2_name} won (${team2_average} vs. ${team1_average})`)
    }

    else {
        console.log(`Nobody won due to lacking scores`)
    }
}

checkWinner(dolphins_average, koalas_average)// 46, 56 : Neither is more than two times bigger than the other, 
