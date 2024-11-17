/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const BASE_PRICE_PER_DAY = 40;
  const BASIC_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const basePrice = days * BASE_PRICE_PER_DAY;

  let totalDiscount = 0;

  if (days >= LONG_TERM) {
    totalDiscount = LONG_TERM_DISCOUNT;
  } else if (days >= 3) {
    totalDiscount = BASIC_DISCOUNT;
  }

  return basePrice - totalDiscount;
}

module.exports = calculateRentalCost;
