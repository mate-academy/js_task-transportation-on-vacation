/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const DAILY_RATE = 40;
  const DISCOUNT_3_DAYS = 20;
  const DISCOUNT_7_DAYS = 50;

  let totalCost = days * DAILY_RATE;

  if (days >= 7) {
    totalCost -= DISCOUNT_7_DAYS;
  } else if (days >= 3) {
    totalCost -= DISCOUNT_3_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;

module.exports = calculateRentalCost;
