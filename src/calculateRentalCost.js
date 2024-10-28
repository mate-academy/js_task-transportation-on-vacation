/**
 * @param {number} days
 *
 * @return {number}
 */

const COST_PER_DAY = 40;
const MEDIUM_PERIOD = 3;
const MEDIUM_PERIOD_DISCOUNT = 20;
const LONG_PERIOD = 7;
const LONG_PERIOD_DISCOUNT = 50;

function calculateRentalCost(days) {
  const rentalCost = days * COST_PER_DAY;

  if (days >= LONG_PERIOD) {
    return rentalCost - LONG_PERIOD_DISCOUNT;
  }

  if (days >= MEDIUM_PERIOD) {
    return rentalCost - MEDIUM_PERIOD_DISCOUNT;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
