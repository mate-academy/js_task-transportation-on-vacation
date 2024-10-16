/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const averageTime = 3;
  const longTerm = 7;
  const dailyRentalRate = 40;
  const averageTimeDiscount = 20;
  const longTermDiscount = 50;
  const totalCost = days * dailyRentalRate;

  if (days >= longTerm) {
    return totalCost - longTermDiscount;
  }

  if (days >= averageTime) {
    return totalCost - averageTimeDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
