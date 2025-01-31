/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseprice = 40;
  const price = baseprice * days;
  const SHORT_TERM = days >= 3;
  const SHORT_TERM_DISCOUNT = price - 20;
  const LONG_TERM = days >= 7;
  const LONG_TERM_DISCOUNT = price - 50;

  if (LONG_TERM) {
    return LONG_TERM_DISCOUNT;
  }

  if (SHORT_TERM) {
    return SHORT_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
