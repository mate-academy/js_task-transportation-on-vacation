/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCostCarRental = 40;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  if (days >= 7) {
    return days * dailyCostCarRental - longTermDiscount;
  }

  if (days >= 3) {
    return days * dailyCostCarRental - shortTermDiscount;
  }

  return days * dailyCostCarRental;
}

module.exports = calculateRentalCost;
