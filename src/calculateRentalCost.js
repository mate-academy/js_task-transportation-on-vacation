/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  if (typeof days !== 'number' || days <= 0 || !Number.isInteger(days)) {
    return NaN;
  }

  const dailyRate = 40;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;
  const shortTermThreshold = 3;
  const longTermThreshold = 7;

  let totalCost = days * dailyRate;

  if (days >= longTermThreshold) {
    totalCost -= longTermDiscount;
  } else if (days >= shortTermThreshold) {
    totalCost -= shortTermDiscount;
  }

  return totalCost;
}


module.exports = calculateRentalCost;
