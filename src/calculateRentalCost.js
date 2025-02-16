/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const FEW_DAYS = 3;
  const FEW_DAYS_DISCOUNT = 20;
  const MANY_DAYS = 7;
  const MANY_DAYS_DISCOUNT = 50;

  const PRICE_PER_DAYS = COST_PER_DAY * days;

  if (days >= MANY_DAYS) {
    return PRICE_PER_DAYS - MANY_DAYS_DISCOUNT;
  }

  if (days >= FEW_DAYS) {
    return PRICE_PER_DAYS - FEW_DAYS_DISCOUNT;
  }

  return PRICE_PER_DAYS;
}

module.exports = calculateRentalCost;
