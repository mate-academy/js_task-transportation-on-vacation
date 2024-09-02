/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  const longTermThreshold = 7;
  const shortTermThreshold = 3;

  const result = days * dailyRate;

  if (days >= longTermThreshold) {
    return result - longTermDiscount;
  }

  if (days >= shortTermThreshold) {
    return result - shortTermDiscount;
  }

  return result;
}
module.exports = calculateRentalCost;
