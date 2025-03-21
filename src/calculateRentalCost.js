/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILI_RATE = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  let TOTAL_AMOUNT = DAILI_RATE * days;

  if (days >= LONG_TERM) {
    return (TOTAL_AMOUNT -= LONG_TERM_DISCOUNT);
  }

  if (days >= SHORT_TERM) {
    return (TOTAL_AMOUNT -= SHORT_TERM_DISCOUNT);
  }

  return TOTAL_AMOUNT;
}

module.exports = calculateRentalCost;
