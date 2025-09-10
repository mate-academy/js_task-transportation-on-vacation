/**
 * @param {number} numberOfDays
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const MEDIUM_TERM_THRESHOLD = 3;
  const LONG_TERM_THRESHOLD = 7;
  const DAILY_RATE = 40;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DISCOUNT = 20;
  const basePrice = numberOfDays * DAILY_RATE;

  if (numberOfDays >= LONG_TERM_THRESHOLD) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= MEDIUM_TERM_THRESHOLD) {
    return basePrice - MEDIUM_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
