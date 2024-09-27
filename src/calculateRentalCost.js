/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_COST = 40;
  const DISCOUNT_DAYS_BASIC = 3;
  const DISCOUNT_VALUE_BASIC = 20;
  const DISCOUNT_DAYS_EXTENDED = 7;
  const DISCOUNT_VALUE_EXTENDED = 50;
  const FULL_COST_FORMULA = DAY_COST * days;

  if (days >= DISCOUNT_DAYS_EXTENDED) {
    return FULL_COST_FORMULA - DISCOUNT_VALUE_EXTENDED;
  }

  if (days >= DISCOUNT_DAYS_BASIC) {
    return FULL_COST_FORMULA - DISCOUNT_VALUE_BASIC;
  }

  return FULL_COST_FORMULA;
}

module.exports = calculateRentalCost;
