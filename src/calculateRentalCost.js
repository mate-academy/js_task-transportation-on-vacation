/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const CAR_DAILY_RENT = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const PRICE = CAR_DAILY_RENT * days;

  return (
    (days >= LONG_TERM && PRICE - LONG_TERM_DISCOUNT) ||
    (days >= SHORT_TERM && PRICE - SHORT_TERM_DISCOUNT) ||
    PRICE
  );
}

module.exports = calculateRentalCost;
