/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const ONE_DAY_PRICE = 40;
  const MID_TERM = 3;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TEMR_DISCOUNT = 50;

  const cost = days * ONE_DAY_PRICE;

  if (days >= LONG_TERM) {
    return cost - LONG_TEMR_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return cost - MID_TERM_DISCOUNT;
  }

  return cost;
}

module.exports = calculateRentalCost;
