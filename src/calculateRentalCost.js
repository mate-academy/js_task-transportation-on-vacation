/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
    const dailyRate = 40;
    const longTermDiscount = 50;
    const mediumTermDiscount = 20;

    const result = days * dailyRate;

    if (days >= 7) {
      return result - longTermDiscount;
    }

    if (days >= 3) {
      return result - mediumTermDiscount;
    }

    return result;
}

module.exports = calculateRentalCost;
