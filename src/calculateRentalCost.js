/**
 * @param {number} days
 *
 * @return {number}
 */
const calculateRentalCost = (days) => {
  const RATE = 40;

  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT_AMOUNT = 20;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT_AMOUNT = 50;

  const basePrice = RATE * days;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT_AMOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrice - SHORT_TERM_DISCOUNT_AMOUNT;
  }

  return basePrice;
};

module.exports = calculateRentalCost;
