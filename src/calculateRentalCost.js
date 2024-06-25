/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const FIRST_LVL_DISCOUNT = 20;
  const SECOND_LVL_DISCOUNT = 50;
  const DAILY_PRICE = 40;
  let totalValue = DAILY_PRICE * days;

  if (days >= 3 && days < 7) {
    totalValue = days * DAILY_PRICE - FIRST_LVL_DISCOUNT;
  } else if (days >= 7) {
    totalValue = days * DAILY_PRICE - SECOND_LVL_DISCOUNT;
  }

  return totalValue;
}

module.exports = calculateRentalCost;
