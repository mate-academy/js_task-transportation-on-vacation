/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_COST = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  let rentCost = DAILY_COST * days;

  if (days >= LONG_TERM) {
    rentCost -= LONG_TERM_DISCOUNT;

    return rentCost;
  }

  if (days >= SHORT_TERM) {
    rentCost -= SHORT_TERM_DISCOUNT;

    return rentCost;
  }

  return rentCost;
}

module.exports = calculateRentalCost;
