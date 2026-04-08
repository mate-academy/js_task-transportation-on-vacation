/**
 * @param {number} days
 *
 * @return {number}
 */


const COST_PER_DAY = 40;
const DISCOUNT_3_DAYS = 20;
const DISCOUNT_7_DAYS = 50;

const MIN_DAYS_FOR_SMALL_DISCOUNT = 3;
const MIN_DAYS_FOR_LARGE_DISCOUNT = 7;

function calculateRentalCost(days) {
  const baseCost = days * COST_PER_DAY;

  if (days >= MIN_DAYS_FOR_LARGE_DISCOUNT) {
    return baseCost - DISCOUNT_7_DAYS;
  }

  if (days >= MIN_DAYS_FOR_SMALL_DISCOUNT) {
    return baseCost - DISCOUNT_3_DAYS;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
