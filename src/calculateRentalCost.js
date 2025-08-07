/**
 * @param {number} days
 *
 * @return {number}
 */
const BASE_PRICE = 40;
const LONG_TERM_DISCOUNT = 50;
const LONG_TERM = 7;
const SHORT_TERM_DISCOUNT = 20;
const SHORT_TERM = 3;

function calculateRentalCost(days) {
  const totalRentalCost = days * BASE_PRICE;

  if (days >= LONG_TERM) {
    return totalRentalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return totalRentalCost - SHORT_TERM_DISCOUNT;
  }

  return totalRentalCost;
}

module.exports = calculateRentalCost;
