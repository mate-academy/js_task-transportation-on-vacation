/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRAICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const DISCOUNT_7_DAYS = 50;
  const SHORT_TERM = 3;
  const DISCOUNT_3_DAYS = 20;

  const basePrice = days * PRAICE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrice - DISCOUNT_7_DAYS;
  } else if (days >= SHORT_TERM) {
    return basePrice - DISCOUNT_3_DAYS;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
