/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_COST = 40;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;

  return days < 3
    ? days * DAY_COST
    : days < 7
      ? days * DAY_COST - SMALL_DISCOUNT
      : days * DAY_COST - BIG_DISCOUNT;
}

module.exports = calculateRentalCost;
