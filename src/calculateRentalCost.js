/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  let cost = 40 * days;

  if (days < SHORT_TERM) {
    // nothing to do
  } else if (days >= SHORT_TERM && days < LONG_TERM) {
      cost -= SHORT_TERM_DISCOUNT;
  } else {
      cost -= LONG_TERM_DISCOUNT;
  }

  return cost;
}

module.exports = calculateRentalCost;
