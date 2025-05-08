/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PRICE = 40;
  const FULL_DISCOUNT = 50;
  const LESS_DISCOUNT = 20;
  const MIN_DAY = 3;
  const MAX_DAY = 7;
  const RENT_AMOUNT = RENT_PRICE * days;

  if (days >= MAX_DAY) {
    return RENT_AMOUNT - FULL_DISCOUNT;
  }

  if (days >= MIN_DAY) {
    return RENT_AMOUNT - LESS_DISCOUNT;
  }

  return RENT_AMOUNT;
}

module.exports = calculateRentalCost;
