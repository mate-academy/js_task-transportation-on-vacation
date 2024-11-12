/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceADay = 40;
  const LONG_TERM = 7;
  const LONG_DISCOUNT = 50;
  const MIDDLE_TERM = 3;
  const MIDDLE_DISCOUNT = 20;
  const TotalPrice = priceADay * days;

  if (days >= MIDDLE_TERM && days < LONG_TERM) {
    return TotalPrice - MIDDLE_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return TotalPrice - LONG_DISCOUNT;
  }

  return TotalPrice;
}

module.exports = calculateRentalCost;
