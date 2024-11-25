/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_COST = 40;
  const MEDIUM_TERM_DISCOUNT = 3;
  const LONG_TERM_DISCOUNT = 7;
  const DISCOUNT_FOR_3_OR_MORE_DAYS = 20;
  const DISCOUNT_FOR_7_OR_MORE_DAYS = 50;

  const totalRentalCost = DAILY_RENTAL_COST * days;

  if (days >= MEDIUM_TERM_DISCOUNT && days < LONG_TERM_DISCOUNT) {
    return totalRentalCost - DISCOUNT_FOR_3_OR_MORE_DAYS;
  }

  if (days >= LONG_TERM_DISCOUNT) {
    return totalRentalCost - DISCOUNT_FOR_7_OR_MORE_DAYS;
  }

  return totalRentalCost;
}

module.exports = calculateRentalCost;
