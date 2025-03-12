/**
 * @param {number} days
 *
 * @return {number}
 */

const RENT_COST = 40;
const FIRST_LEVEL_DISCOUNT = 20;
const SECOND_LEVEL_DISCOUNT = 50;
const FIRST_LEVEL_DAYS = 3;
const SECOND_LEVEL_DAYS = 7;

function calculateRentalCost(days) {
  let totalCost = days * RENT_COST;

  if (days >= SECOND_LEVEL_DAYS) {
    totalCost -= SECOND_LEVEL_DISCOUNT;
  } else if (days >= FIRST_LEVEL_DAYS) {
    totalCost -= FIRST_LEVEL_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
