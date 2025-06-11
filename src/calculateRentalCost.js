/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAYS_PRICE = 40;
  const SHORT_DISCOUNT = 20;
  const LONG_DISCOUNT = 50;
  const FEW_DAYS = 3;
  const MANY_DAYS = 7;

  const total = days * DAYS_PRICE;

  if (days >= MANY_DAYS) {
    return total - LONG_DISCOUNT;
  }

  if (days >= FEW_DAYS) {
    return total - SHORT_DISCOUNT;
  }

  return total;

}

module.exports = calculateRentalCost;
