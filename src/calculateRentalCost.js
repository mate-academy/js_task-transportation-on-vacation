/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASIC_RENTAL_COST = 40;
  const SHORT_RENTAL_TERM = 3;
  const SMALL_DISCOUNT = 20;
  const LONG_RENTAL_TERM = 7;
  const BIG_DISCOUNT = 50;

  let totalCost = days * BASIC_RENTAL_COST;

  if (days >= SHORT_RENTAL_TERM && days < LONG_RENTAL_TERM) {
    totalCost = totalCost - SMALL_DISCOUNT;
  } else if (days >= LONG_RENTAL_TERM) {
    totalCost = totalCost - BIG_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
