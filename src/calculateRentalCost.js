/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_RENT = 40;
  const MID_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const LONG_TERM = 7;
  const MID_TERM = 3;
  const PRICE_NO_DISCOUNT = DAY_RENT * days;

  if (days >= LONG_TERM) {
    return PRICE_NO_DISCOUNT - BIG_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return PRICE_NO_DISCOUNT - MID_DISCOUNT;
  }

  return PRICE_NO_DISCOUNT;
}

module.exports = calculateRentalCost;
