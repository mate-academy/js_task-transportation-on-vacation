/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const DAILY_RATE = 40;
  const LONG_TERM_USE = 7;
  const MID_TERM_USE = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;

  const basePrice = numberOfDays * DAILY_RATE;

  if (numberOfDays >= LONG_TERM_USE) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= MID_TERM_USE) {
    return basePrice - MID_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
