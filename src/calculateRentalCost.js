/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  const mediumTermThreshold = 3;
  const longTermThreshold = 7;
  let cost = days * dailyRate;

  if (days >= longTermThreshold) {
    cost -= longTermDiscount;
  } else if (days >= mediumTermThreshold) {
    cost -= shortTermDiscount;
  }

  return cost;
}

module.exports = calculateRentalCost;
