/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM_DAYS_THRESHOLD = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SMALL_TERM_DAYS_THRESHOLD = 3;
  const SMALL_TERM_DISCOUNT = 20;
  const CAR_COST = 40;

  if (days >= LONG_TERM_DAYS_THRESHOLD) {
    return days * CAR_COST - LONG_TERM_DISCOUNT;
  }

  if (days >= SMALL_TERM_DAYS_THRESHOLD) {
    return days * CAR_COST - SMALL_TERM_DISCOUNT;
  }

  return days * CAR_COST;
}



module.exports = calculateRentalCost;
