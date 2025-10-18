/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const DAILY_PRICE = 40;
  const DISCOUNT_FOR_7DAYS = 50;
  const DISCOUNT_FOR_3DAYS = 20;
  const LONG_TERM = 7;
  const MID_TERM = 3;

  if (numberOfDays >= LONG_TERM) {
    return numberOfDays * DAILY_PRICE - DISCOUNT_FOR_7DAYS;
  }

  if (numberOfDays < MID_TERM) {
    return numberOfDays * DAILY_PRICE;
  }

  if (numberOfDays >= 3) {
    return numberOfDays * DAILY_PRICE - DISCOUNT_FOR_3DAYS;
  }
}

module.exports = calculateRentalCost;
