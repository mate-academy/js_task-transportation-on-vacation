/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const rentalPricePerDay = 40;

  if (days >= LONG_TERM) {
    return days * rentalPricePerDay - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * rentalPricePerDay - SHORT_TERM_DISCOUNT;
  }

  return rentalPricePerDay * days;
}

module.exports = calculateRentalCost;
