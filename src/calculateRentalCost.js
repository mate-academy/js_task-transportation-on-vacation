/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const midTermDiscount = 20;
  const longTermDiscount = 50;

  let totalCost = dailyRate * days;

  if (days <= 2) {
    return totalCost;
  }

  if (days >= 3 && days <= 6) {
    totalCost -= midTermDiscount;

    return totalCost;
  }

  if (days >= 7) {
    totalCost -= longTermDiscount;

    return totalCost;
  }
}

module.exports = calculateRentalCost;
