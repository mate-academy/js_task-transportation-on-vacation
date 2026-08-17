/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PRICE = 40;
  const LARGE_DISCOUNT = 50;
  const MEDIUM_DISCOUNT = 20;
  const BASIC_PRICE = RENT_PRICE * days;

  if (days >= 7) {
    return BASIC_PRICE - LARGE_DISCOUNT;
  }

  if (days >= 3) {
    return BASIC_PRICE - MEDIUM_DISCOUNT;
  }

  return BASIC_PRICE;
}

module.exports = calculateRentalCost;
