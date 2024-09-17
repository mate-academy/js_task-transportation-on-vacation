/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const rentalCostWithoutSale = days * PRICE_PER_DAY;
  const LONG_TERM = 7;
  const LONG_TERM_SALE = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_SALE = 20;

  if (days >= LONG_TERM) {
    return rentalCostWithoutSale - LONG_TERM_SALE;
  }

  if (days >= SHORT_TERM) {
    return rentalCostWithoutSale - SHORT_TERM_SALE;
  }

  return rentalCostWithoutSale;
}

module.exports = calculateRentalCost;
