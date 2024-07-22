/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  switch (days) {
    case 7:
      return 7 * PRICE - LONG_TERM_DISCOUNT;
    case 6:
      return 6 * PRICE - SHORT_TERM_DISCOUNT;
    case 5:
      return 5 * PRICE - SHORT_TERM_DISCOUNT;
    case 4:
      return 4 * PRICE - SHORT_TERM_DISCOUNT;
    case 3:
      return 3 * PRICE - SHORT_TERM_DISCOUNT;
    case 2:
      return 2 * PRICE;
    case 1:
      return 1 * PRICE;
  }
}

module.exports = calculateRentalCost;
