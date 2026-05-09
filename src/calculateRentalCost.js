/**
 * @param {number} days
 *
 * @return {number}
 */
const COST_PER_DAY = 40;
const DISCOUNT_3_DAYS = 20;
const DISCOUNT_7_DAYS = 50;

function calculateRentalCost(days) {
  if (days < 3) {
    return days * COST_PER_DAY;
  } else if (days < 7) {
    return days * COST_PER_DAY - DISCOUNT_3_DAYS;
  } else {
    return days * COST_PER_DAY - DISCOUNT_7_DAYS;
  }
}

module.exports = calculateRentalCost;
