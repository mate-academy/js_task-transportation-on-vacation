/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM_DAYS = 7;
  const MEDIUM_TERM_DAYS = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DISCOUNT = 20;

  const basePrice = numberOfDays * PRICE_PER_DAY;

  if (numberOfDays >= LONG_TERM_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= MEDIUM_TERM_DAYS) {
    return basePrice - MEDIUM_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
