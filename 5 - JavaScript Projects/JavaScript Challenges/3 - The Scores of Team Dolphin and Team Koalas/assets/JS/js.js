// What you must do with the data of each situation is:
// 1 - Calculate the average score of each team

// 2 - Compare the average score of both teams to each other to see who wins.

// 3 - Create a condition where the average score of each team has to be at least more than 100

// 4 - Write a condition where AT LEAST one of the averages has to be greater or equal to 100, Otherwise 
// no one gets the trophy

// 5 - Write a condition where if the two averages are equal, Then it's a draw.

// Sitution 1 :
// Dolphins Scored : 96, 108, 89
// Koalas Scored : 88, 91, 110

let dolphins_average = (96 + 108 + 89) / 3
console.log(`Team Dolphins's score: ${dolphins_average}`)
let koalas_average = (88 + 91 + 110) / 3
console.log(`Team Koalas's score: ${koalas_average}`)

// The requierment for the trophy to be won
if (dolphins_average >= 100 || koalas_average >=100) {

    // The requierment for Dolphins to win the Trophy
    if(dolphins_average > koalas_average){
        console.log(`Team Dolphins with a score of ${dolphins_average} wins over Koalas's score of ${koalas_average}`)
    }

    // The requierment for Koalas to win the Trophy
    else if(koalas_average > dolphins_average){
        console.log(`Team Koalas with a score of ${koalas_average} wins over Dolphins's score of ${dolphins_average}`)
    }

    // In case the two scores are even
    else {
        console.log(`The score of Team Dolphins (${dolphins_average}) and Koalas (${koalas_average}) are the same, This is a tie.`)
    }
}
// In case neither of the Teams qualify for winning the trophy
else if(dolphins_average < 100 && koalas_average < 100){
    console.log(`The scores of Team Dolphin (${dolphins_average}) and Koalas (${koalas_average}) are below 100, Disqualifying them for the trophy`)
}

console.log(`
`)
// Just for putting space between the codes

// Situation 2 :
// Dolphins Scored : 97, 112, 101
// Koalas Scored : 88, 91, 110

dolphins_average = (97 + 112 + 101) / 3
console.log(`Team Dolphins's score: ${dolphins_average}`)
koalas_average = (97 + 112 + 101) / 3
console.log(`Team Koalas's score: ${koalas_average}`)

// The requierment for the trophy to be won
if (dolphins_average >= 100 || koalas_average >=100) {

    // The requierment for Dolphins to win the Trophy
    if(dolphins_average > koalas_average){
        console.log(`Team Dolphins with a score of ${dolphins_average} wins over Koalas's score of ${koalas_average}`)
    }

    // The requierment for Koalas to win the Trophy
    else if(koalas_average > dolphins_average){
        console.log(`Team Koalas with a score of ${koalas_average} wins over Dolphins's score of ${dolphins_average}`)
    }

    // In case the two scores are even
    else {
        console.log(`The score of Team Dolphins (${dolphins_average}) and Koalas (${koalas_average}) are the same, This is a tie.`)
    }
}
// In case neither of the Teams qualify for winning the trophy
else if(dolphins_average < 100 && koalas_average < 100){
    console.log(`The scores of Team Dolphin (${dolphins_average}) and Koalas (${koalas_average}) are below 100, Disqualifying them for the trophy`)
}