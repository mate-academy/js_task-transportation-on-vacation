/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_7_DAYS = 50;
  const DISCOUNT_3_DAYS = 20;
  const THRESHOLD_7_DAYS = 7;
  const THRESHOLD_3_DAYS = 3;

  let total = days * DAILY_RATE;

  if (days >= THRESHOLD_7_DAYS) {
    total -= DISCOUNT_7_DAYS;
  } else if (days >= THRESHOLD_3_DAYS) {
    total -= DISCOUNT_3_DAYS;
  }

  return total;
}

module.exports = calculateRentalCost;
