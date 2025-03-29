/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const MIN_RENT_DAYS_MID_TERM_DISCOUNT = 3;
  const MIN_RENT_DAYS_LONG_TERM_DISCOUNT = 7;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  const totalSum = DAILY_RATE * days;

  if (days >= MIN_RENT_DAYS_LONG_TERM_DISCOUNT) {
    return totalSum - LONG_TERM_DISCOUNT;
  }

  if (days >= MIN_RENT_DAYS_MID_TERM_DISCOUNT) {
    return totalSum - MID_TERM_DISCOUNT;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
