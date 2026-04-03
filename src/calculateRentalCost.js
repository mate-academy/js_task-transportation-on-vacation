/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_RATE = 40;

  const LONG_TERM_THRESHOLD = 7;
  const LONG_TERM_DISCOUNT = 50;

  const MID_TERM_THRESHOLD = 3;
  const MID_TERM_DISCOUNT = 20;

  const totalBasePrice = days * DAILY_RENTAL_RATE;

  if (days >= LONG_TERM_THRESHOLD) {
    return totalBasePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_THRESHOLD) {
    return totalBasePrice - MID_TERM_DISCOUNT;
  }

  return totalBasePrice;
}

module.exports = calculateRentalCost;
