/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const BILL_WHITHOUT_SALE = PRICE_PER_DAY * days;

  if (days < SHORT_TERM) {
    return BILL_WHITHOUT_SALE;
  }

  if (days < LONG_TERM) {
    return BILL_WHITHOUT_SALE - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return BILL_WHITHOUT_SALE - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
