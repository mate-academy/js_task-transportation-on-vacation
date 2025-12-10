/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT = 40;
  const SMALL_SALE = 20;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const BIG_SALE = 50;
  let TOTAL_RENT = 0;

  if (days >= SHORT_TERM) {
    TOTAL_RENT = RENT * days - SMALL_SALE;
  }

  if (days >= LONG_TERM) {
    TOTAL_RENT = RENT * days - BIG_SALE;
  }

  if (days < SHORT_TERM) {
    return RENT * days;
  }

  return TOTAL_RENT;
}

module.exports = calculateRentalCost;
