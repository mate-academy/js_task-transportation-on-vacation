/**
 * @param {number} days
 *
 * @return {number}
 */

const LONG_TERM = 7;
const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 50;
const DISCOUNT_3_DAYS = 20;
const PRICE = 40;

function calculateRentalCost(days) {
  const totalCost = days * PRICE;

  if (days >= LONG_TERM) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return totalCost - DISCOUNT_3_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
