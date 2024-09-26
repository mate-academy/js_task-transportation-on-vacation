/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  let totalCost = dailyCost * days;

  if (days >= 7) {
    totalCost -= longTermDiscount;
  } else if (days >= 3) {
    totalCost -= shortTermDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
