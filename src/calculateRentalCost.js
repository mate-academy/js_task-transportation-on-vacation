/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_RATE = 40;
  const DISCOUNT_7_DAYS = 50;
  const DISCOUNT_3_DAYS = 20;

  let total = days * DAILY_RATE;

  if (days >= 7) {
    total -= DISCOUNT_7_DAYS;
  } else if (days >= 3) {
    total -= DISCOUNT_3_DAYS;
  }

  return total;
}

module.exports = calculateRentalCost;
