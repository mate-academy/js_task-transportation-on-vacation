/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
    let totalCost = days * dailyRate;

    if (days >= 7) {
        totalCost -= 50;
    } else if (days >= 3) {
        totalCost -= 20;
    }

    return totalCost;
}

module.exports = calculateRentalCost;
