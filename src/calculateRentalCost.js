/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_COST = 40;
  const LONG_TIME_DISCOUNT = 50;
  const SHORT_TIME_DISCOUNT = 20;

  if (days >= 7) {
    return DAY_COST * days - LONG_TIME_DISCOUNT;
  } else if (days >= 3) {
    return DAY_COST * days - SHORT_TIME_DISCOUNT;
  }

  return DAY_COST * days;
}

module.exports = calculateRentalCost;
