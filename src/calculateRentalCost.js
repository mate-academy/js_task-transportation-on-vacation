/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sum = 0;
  const DAILY_RENT = 40;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DAYS = 3;
  const SHORT_TERM_DISCOUNT = 20;

  switch (true) {
    case days >= LONG_TERM_DAYS:
      sum = DAILY_RENT * days - LONG_TERM_DISCOUNT;
      break;
    case days >= SHORT_TERM_DAYS:
      sum = DAILY_RENT * days - SHORT_TERM_DISCOUNT;
      break;
    default:
      sum = DAILY_RENT * days;
      break;
  }

  return sum;
}

module.exports = calculateRentalCost;
