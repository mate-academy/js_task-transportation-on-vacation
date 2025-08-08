/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_CAR = 40;
  const RULE_SEVEN = 7;
  const DESCOUNT_ONE = 50;
  const RULE_THREE = 3;
  const DESCOUNT_TWO = 20;

  const BASE_PRICE = days * DAY_CAR;

  if (days >= RULE_SEVEN) {
    return BASE_PRICE - DESCOUNT_ONE;
  }

  if (days >= RULE_THREE) {
    return BASE_PRICE - DESCOUNT_TWO;
  }

  return BASE_PRICE;
}

module.exports = calculateRentalCost;
