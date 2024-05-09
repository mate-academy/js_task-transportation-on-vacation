/**
 * @param {number} days
 *
 * @return {number}
 */

const AMOUNT_FOR_DAY = 40;
const LONG_TERM = 7;
const SHORT_TERM = 3;
const SMALL_DISCOUNT = 20;
const BIG_DISCOUNT = 50;

function calculateRentalCost(days) {
  const amount = days * AMOUNT_FOR_DAY;

  if (days >= LONG_TERM) {
    return amount - BIG_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return amount - SMALL_DISCOUNT;
  }

  return amount;
}

module.exports = calculateRentalCost;
