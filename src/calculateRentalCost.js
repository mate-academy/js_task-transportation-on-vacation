/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const amountRent = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORTER_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return (amountRent * days) - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return (amountRent * days) - SHORTER_TERM_DISCOUNT;
  }

  return amountRent * days;
}

module.exports = calculateRentalCost;
