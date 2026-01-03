/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const RENT_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  let rentTotal = RENT_PER_DAY * days;

  if (days >= LONG_TERM) {
    return rentTotal - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    return rentTotal - SHORT_TERM_DISCOUNT;
  }

  return rentTotal;
}

module.exports = calculateRentalCost;
