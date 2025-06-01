/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const START_PRICE = 40;
  const LONG_TERM = 7;
  const MID_TERM = 3;
  const DISCOUNT_FOR_LONG_TERM = 50;
  const DISCOUNT_FOR_MID_TERM = 20;
  const totalAmount = START_PRICE * days;

  if (days >= LONG_TERM) {
    return totalAmount - DISCOUNT_FOR_LONG_TERM;
  }

  if (days >= MID_TERM && days < LONG_TERM) {
    return totalAmount - DISCOUNT_FOR_MID_TERM;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
