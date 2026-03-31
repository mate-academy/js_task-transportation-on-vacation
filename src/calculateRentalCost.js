/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_RENT_DAYS = 7;
  const LONG_RENT_DISCOUNT = 50;
  const SHORT_RENT_DAYS = 3;
  const SHORT_RENT_DISCOUNT = 20;

  if (days >= LONG_RENT_DAYS) {
    return days * DAILY_RATE - LONG_RENT_DISCOUNT;
  }

  if (days >= SHORT_RENT_DAYS) {
    return days * DAILY_RATE - SHORT_RENT_DISCOUNT;
  }

  return days * DAILY_RATE;
}

module.exports = calculateRentalCost;