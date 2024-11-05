// Write a function called calculateDiscount that takes in two parameters:

// totalAmount (a number) – the total purchase amount in dollars.
// membershipLevel (a string) – the membership level of the customer, which can be either "Gold", "Silver", or "Bronze".
// The function should calculate the discount based on the following criteria:

// Gold members receive a 20% discount.
// Silver members receive a 10% discount.
// Bronze members receive a 5% discount.
// If the membershipLevel is not one of these three options, apply no discount.
// The function should return the final price after applying the discount (rounded to two decimal places).

function calculateDiscount(purchases, membership_level){
    const gold_discount = purchases * 20 / 100
    const silver_discount = purchases * 10 / 100
    const bronze_discount = purchases * 5 / 100

    if(membership_level === `bronze`){
        return `The cost of your purchases is ${purchases - bronze_discount} dollars with the bronze discount`
    }

    else if(membership_level === `silver`){
        return `The cost of your purchases is ${purchases - silver_discount} dollars with the silver discount`
    }

    else if(membership_level === `gold`){
        return `The cost of your purchases is ${purchases - gold_discount} dollars with the gold discount`
    }
    else {
        return `The cost of your purchases is ${purchases} dollars with the no discount`
    }
}

console.log(calculateDiscount(200, `bronze`)) // 200 - (200 * 5 / 100) = 190

console.log(calculateDiscount(200, `silver`)) // 200 - (200 * 10 / 100) = 180

console.log(calculateDiscount(200, `gold`)) // 200 - (200 * 20 / 100) = 160

console.log(calculateDiscount(200, `red`)) // result == 200 