/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_RENT_PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return (days * DAY_RENT_PRICE) - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return (days * DAY_RENT_PRICE) - SHORT_TERM_DISCOUNT;
  }

  return days * DAY_RENT_PRICE;
}

module.exports = calculateRentalCost;
