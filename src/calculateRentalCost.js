/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_FOR_3_DAYS = 20;
  const DISCOUNT_FOR_7_DAYS = 50;

  let total = days * DAILY_RATE;

  if (days >= 7) {
    total -= DISCOUNT_FOR_7_DAYS;
  } else if (days >= 3) {
    total -= DISCOUNT_FOR_3_DAYS;
  }

  return total;
}

module.exports = calculateRentalCost;
