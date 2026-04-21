/**
 * @param {number} days
 *
 * @return {number}
 */
const DAY_PRICE = 40;

const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const baseCost = days * DAY_PRICE;

  if (days >= LONG_TERM) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return baseCost - SHORT_TERM_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
