/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DSCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DSCOUNT = 20;

  const dayCostsRental = PRICE_PER_DAY * days;

  if (days >= LONG_TERM) {
    return dayCostsRental - LONG_TERM_DSCOUNT;
  }

  if (days >= SHORT_TERM) {
    return dayCostsRental - SHORT_TERM_DSCOUNT;
  }

  return dayCostsRental;
}

module.exports = calculateRentalCost;
