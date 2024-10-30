/**
 * @param {number} days
 *
 * @return {number}
 */
const RENTCOSTFORONEDAY = 40;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM = 7;
const SHORT_TERM = 3;

function calculateRentalCost(days) {
  const totalCost = RENTCOSTFORONEDAY * days;

  if (days >= LONG_TERM) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
