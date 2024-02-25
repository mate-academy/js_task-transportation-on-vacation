/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PER_DAY = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const rentSum = RENT_PER_DAY * days;

  if (days >= LONG_TERM) {
    return rentSum - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return rentSum - SHORT_TERM_DISCOUNT;
  }

  if (days < SHORT_TERM) {
    return rentSum;
  }

  return rentSum;
}

module.exports = calculateRentalCost;
