/**
 * @param {number} days
 *
 * @return {number}
 */

const DAILY_COST = 40;
const MANY_DAYS = 7;
const BIG_DISCOUNT = 50;
const FEW_DAYS = 3;
const SMALL_DISCOUNT = 20;

function calculateRentalCost(days) {
  const totalCost = DAILY_COST * days;

  if (days >= MANY_DAYS) {
    return totalCost - BIG_DISCOUNT;
  }

  if (days >= FEW_DAYS) {
    return totalCost - SMALL_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
