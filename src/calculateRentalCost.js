/**
 * @param {number} days
 *
 * @return {number}
 */

const PRICE = 40;
const BASIC_DISCOUNT_AMOUNT = 20;
const LONG_DISCOUNT_AMOUNT = 50;
const BASIC_DISCOUNT_START = 3;
const LONG_DISCOUNT_START = 7;

function calculateRentalCost(days) {
  const total = days * PRICE;

  if (days < BASIC_DISCOUNT_START) {
    return total;
  }

  if (days < LONG_DISCOUNT_START) {
    return total - BASIC_DISCOUNT_AMOUNT;
  }

  return total - LONG_DISCOUNT_AMOUNT;
}

module.exports = calculateRentalCost;
module.exports = calculateRentalCost;
