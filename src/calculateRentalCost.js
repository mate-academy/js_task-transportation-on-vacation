/**
 * @param {number} days
 *
 * @return {number}
 */

const RENTAL_COST = 40;
const SHORT_DISCOUNT_PERIOD = 3;
const LONG_DISCOUNT_PERIOD = 7;
const SHORT_DISCOUNT = 20;
const LONG_DISCOUNT = 50;

function calculateRentalCost(days) {
  const baseCost = days * RENTAL_COST;

  if (days < SHORT_DISCOUNT_PERIOD) {
    return baseCost;
  }

  if (days < LONG_DISCOUNT_PERIOD) {
    return baseCost - SHORT_DISCOUNT;
  }

  return baseCost - LONG_DISCOUNT;
}

module.exports = calculateRentalCost;
