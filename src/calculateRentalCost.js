/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(daysRented) {
  const DAILY_BASE_COST = 40;

  let totalCost = daysRented * DAILY_BASE_COST;

  if (daysRented >= 7) {
    totalCost -= 50;
  } else if (daysRented >= 3) {
    totalCost -= 20;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
