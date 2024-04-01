/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const rentalCostWithoutSale = days * PRICE_PER_DAY;
  let totalCost = 0;
  const LONG_TERM = 7;
  const LONG_TERM_SALE = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_SALE = 20;

  if (days >= LONG_TERM) {
    return (totalCost = rentalCostWithoutSale - LONG_TERM_SALE);
  }

  if (days >= SHORT_TERM) {
    return (totalCost = rentalCostWithoutSale - SHORT_TERM_SALE);
  }

  return rentalCostWithoutSale;
}

module.exports = calculateRentalCost;
