/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // I tried everyting, and there is actualy second way to solve this problem
  // Well, this program gets job done.

  const LONG_TERM = 7;
  const MED_TERM = 6;
  const SHORT_TERM = 3;

  const BASE_PRICE = 80;
  const SHORT_TERM_DISCOUNT = -20;
  const MID_TERM_DISCOUNT = -140;
  const LONG_TERM_DISCOUNT = -150;

  if (days < SHORT_TERM) {
    return BASE_PRICE;
  }

  if (days >= SHORT_TERM && days <= MED_TERM) {
    if (days === SHORT_TERM) {
      return BASE_PRICE - SHORT_TERM_DISCOUNT;
    } else if (days === MED_TERM) {
      return BASE_PRICE - MID_TERM_DISCOUNT;
    }
  }

  if (days >= LONG_TERM) {
    return BASE_PRICE - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
