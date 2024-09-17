/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentPerDay = 40;
  const rentAmount = rentPerDay * days;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MIDDLE_TERM = 3;
  const MIDDLE_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return rentAmount - LONG_TERM_DISCOUNT;
  } else if (days >= MIDDLE_TERM) {
    return rentAmount - MIDDLE_TERM_DISCOUNT;
  }

  return rentAmount;
}

module.exports = calculateRentalCost;
