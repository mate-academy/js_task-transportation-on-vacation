function calculateRentalCost(days) {
    const dailyRate = 40;
    let total = days * dailyRate;

    if (days >= 7) {
        total -= 50;
    } else if (days >= 3) {
        total -= 20;
    }

    return total;
}

// Test examples
console.log(calculateRentalCost(1)); // 40
console.log(calculateRentalCost(3)); // 100
console.log(calculateRentalCost(7)); // 230
