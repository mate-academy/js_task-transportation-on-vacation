/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  let cost = days * dailyRate;

  if (days >= 7) {
    cost -= longTermDiscount;
  } else if (days >= 3) {
    cost -= shortTermDiscount;
  }

  return cost;
}

module.exports = calculateRentalCost;
