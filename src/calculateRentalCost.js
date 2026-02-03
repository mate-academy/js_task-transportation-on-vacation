/**
 * @param {number} days
 *
 * @return {number}
 */
const COST_PER_DAY = 40;
const MINIMAL_DISCOUNT = 20;
const MAXIMUM_DISCOUNT = 50;
const ONE_DAY_RENT = 1;
const THREE_DAY_RENT = 3;
const SEVEN_DAY_RENT = 7;

function calculateRentalCost(days) {
  if (days >= SEVEN_DAY_RENT) {
    return days * COST_PER_DAY - MAXIMUM_DISCOUNT;
  }

  if (days >= THREE_DAY_RENT && days < SEVEN_DAY_RENT) {
    return days * COST_PER_DAY - MINIMAL_DISCOUNT;
  }

  if (days >= ONE_DAY_RENT && days < THREE_DAY_RENT) {
    return days * COST_PER_DAY;
  }
}

module.exports = calculateRentalCost;
