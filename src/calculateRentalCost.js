/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE = 40;
  const DISCOUNT_BIG = 50;
  const DISCOUNT_SMALL = 20;
  const AMOUNT_COST = days * PRICE;
  const DAYS_BIG_DISCOUNT = 7;
  const DAYS_SMALL_DISCOUNT = 3;

  if (days >= DAYS_BIG_DISCOUNT) {
    return AMOUNT_COST - DISCOUNT_BIG;
  }

  if (days >= DAYS_SMALL_DISCOUNT) {
    return AMOUNT_COST - DISCOUNT_SMALL;
  }

  return AMOUNT_COST;
}

module.exports = calculateRentalCost;
