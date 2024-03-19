/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PER_DAY = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const basePrice = days * RENT_PER_DAY;

  if (days === 0) {
    return 'nothing to pay';
  }

  if (days < SHORT_TERM) {
    return basePrice;
  }

  if (days === SHORT_TERM) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
