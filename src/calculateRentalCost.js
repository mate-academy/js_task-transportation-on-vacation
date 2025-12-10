/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT = 40;
  const LONG_TERM = 7;
  const LONG_TERM_SALE = 50;
  const SHORT_TERM = 3;
  const SMALL_TERM_SALE = 20;

  const totalRent = days * RENT;

  if (days >= LONG_TERM) {
    return totalRent - LONG_TERM_SALE;
  }

  if (days >= SHORT_TERM) {
    return totalRent - SMALL_TERM_SALE;
  }

  return totalRent;
}

module.exports = calculateRentalCost;
