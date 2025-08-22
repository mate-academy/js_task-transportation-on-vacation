/**
 * @param {number} days
 *
 * @return {number}
 */

const DAILY_RATE = 40;
const DISCOUNT_THRESHOLD_WEEK = 7;
const DISCOUNT_THRESHOLD_SHORT = 3;
const DISCOUNT_WEEK = 50;
const DISCOUNT_SHORT = 20;

function calculateRentalCost(rentalDays) {
  const baseCost = rentalDays * DAILY_RATE;

  if (rentalDays >= DISCOUNT_THRESHOLD_WEEK) {
    return baseCost - DISCOUNT_WEEK;
  }

  if (rentalDays >= DISCOUNT_THRESHOLD_SHORT) {
    return baseCost - DISCOUNT_SHORT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
