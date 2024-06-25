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

  let totalValue = DAILY_PRICE * days;

  if (days >= MID_TERM && days < LONG_TERM) {
    totalValue = days * DAILY_PRICE - FIRST_LVL_DISCOUNT;
  } else if (days >= LONG_TERM) {
    totalValue = days * DAILY_PRICE - SECOND_LVL_DISCOUNT;
  }

  return totalValue;
}

module.exports = calculateRentalCost;
