/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
    // write code here
    const dailyCost = 40;
    let totalCost = days * dailyCost;
    const longTermDiscount = 50;
    const shortTermDiscount = 20;

    if (days >= 7) {
        return totalCost -= longTermDiscount;
    }
    if (days >= 3) {
        return totalCost -= shortTermDiscount;
    }

    return totalCost;
}

module.exports = calculateRentalCost;