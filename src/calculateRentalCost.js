/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONGSTAY_PERIOD = 7;
  const SHORTSTAY_PERIOD = 3;
  const LONGSTAY_DISCOUNT = 50;
  const SHORTSTAY_DISCOUNT = 20;
  const basePrice = days * PRICE_PER_DAY;

  if (days >= LONGSTAY_PERIOD) {
    return basePrice - LONGSTAY_DISCOUNT;
  }

  if (days >= SHORTSTAY_PERIOD) {
    return basePrice - SHORTSTAY_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
