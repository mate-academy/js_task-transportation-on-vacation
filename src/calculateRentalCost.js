/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const totalCost = days * dayCost;

  const LONG_TERM_RENTAL_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_RENTAL_DAYS = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_RENTAL_DAYS) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
