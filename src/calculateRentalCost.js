/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_7_DAYS = 50;
  const DISCOUNT_3_DAYS = 20;
  const MIN_DAYS_FOR_7_DISCOUNT = 7;
  const MIN_DAYS_FOR_3_DISCOUNT = 3;

  let total = days * DAILY_RATE;

  if (days >= MIN_DAYS_FOR_7_DISCOUNT) {
    total -= DISCOUNT_7_DAYS;
  } else if (days >= MIN_DAYS_FOR_3_DISCOUNT) {
    total -= DISCOUNT_3_DAYS;
  }

  return total;
}

module.exports = calculateRentalCost;
