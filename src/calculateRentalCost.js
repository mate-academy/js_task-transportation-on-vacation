/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let cost = days * 40;

  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days < SHORT_TERM) {
    return cost;
  }

  if (days >= LONG_TERM) {
    return (cost -= LONG_TERM_DISCOUNT);
  }

  if (days >= SHORT_TERM) {
    return (cost -= SHORT_TERM_DISCOUNT);
  }
}

module.exports = calculateRentalCost;
