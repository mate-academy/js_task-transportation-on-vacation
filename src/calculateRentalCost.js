/**
 * @param {number} days
 *
 * @return {number}
 */

const PRICE_PER_DAY = 40;
const MID_TERM = 3;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const totalCost = PRICE_PER_DAY * days;

  if (days >= LONG_TERM) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return totalCost - MID_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
