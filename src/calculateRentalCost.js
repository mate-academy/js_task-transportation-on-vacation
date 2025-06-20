/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days > 0) {
    const dailyRate = 40;
    let totalCost = days * dailyRate;

    if (days >= 3 && days < 7) {
      totalCost -= 20; // Discount for 3 to 6 days
    }

    if (days >= 7) {
      totalCost -= 50; // Discount for 7 or more days
    }

    return totalCost;
  } else {
    return 0; // No cost for 0 or negative days
  }
}

module.exports = calculateRentalCost;
