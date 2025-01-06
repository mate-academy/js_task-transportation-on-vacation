/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const COST_BY_DAY = 40;
  const FIRST_DISCOUNT = 20;
  const SECOND_DISCOUNT = 50;
  const FIRST_DISCOUNT_TERM = 3;
  const SECOND_DISCOUNT_TERM = 7;

  if (days < FIRST_DISCOUNT_TERM) {
    return COST_BY_DAY * days;
  }

  if (days >= SECOND_DISCOUNT_TERM) {
    return COST_BY_DAY * days - SECOND_DISCOUNT;
  }

  return COST_BY_DAY * days - FIRST_DISCOUNT;
}

module.exports = calculateRentalCost;
