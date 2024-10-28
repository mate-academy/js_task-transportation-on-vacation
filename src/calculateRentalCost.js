/**
 * @param {number} days
 *
 * @return {number}
 */

const COST_PER_DAY = 40;
const MIDDLE_PERIOD = 3;
const MIDDLE_PERIOD_DISCOUNT = 20;
const LONG_PERIOD = 7;
const LONG_PERIOD_DISCOUNT = 50;

function calculateRentalCost(days) {
  const rentalCost = days * COST_PER_DAY;

  if (days >= MIDDLE_PERIOD && days < LONG_PERIOD) {
    return rentalCost - MIDDLE_PERIOD_DISCOUNT;
  }

  if (days >= LONG_PERIOD) {
    return rentalCost - LONG_PERIOD_DISCOUNT;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
