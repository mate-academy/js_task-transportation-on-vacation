/**
 * @param {number} days
 *
 * @return {number}
 */
const RENT_PRICE = 40;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const MEDIUM_TERM = 3;
const MEDIUM_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const numberOfDays = days;
  const basePrice = numberOfDays * RENT_PRICE;

  if (numberOfDays >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays < LONG_TERM && numberOfDays >= MEDIUM_TERM) {
    return basePrice - MEDIUM_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
