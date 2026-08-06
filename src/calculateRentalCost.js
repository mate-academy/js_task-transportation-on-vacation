/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_COST = 40;
  const BASIC_DISCOUNT = 20;
  const ADDITIONAL_DISCOUNT = 50;

  let total = days * DAILY_COST;

  if (days >= 7) {
    total -= ADDITIONAL_DISCOUNT;
  } else if (days >= 3) {
    total -= BASIC_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
