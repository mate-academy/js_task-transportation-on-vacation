/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_COST = 40;
  const LTTL_DAYS = 3;
  const LTTL_DAYS_DISCOUNT = 20;
  const MANY_DAYS = 7;
  const MANY_DAYS_DISCOUNT = 50;

  const sum = DAY_COST * days;

  if (days >= MANY_DAYS) {
    return sum - MANY_DAYS_DISCOUNT;
  }

  if (days >= LTTL_DAYS) {
    return sum - LTTL_DAYS_DISCOUNT;
  }

  return sum;

}

module.exports = calculateRentalCost;
