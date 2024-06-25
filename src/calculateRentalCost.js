/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const FIRST_LVL_DISCOUNT = 20;
  const SECOND_LVL_DISCOUNT = 50;
  const DAILY_PRICE = 40;
  const LONG_TERM = 7;
  const MID_TERM = 3;

  if (days >= LONG_TERM) {
    return days * DAILY_PRICE - SECOND_LVL_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return days * DAILY_PRICE - FIRST_LVL_DISCOUNT;
  }

  return days * DAILY_PRICE;
}

module.exports = calculateRentalCost;
