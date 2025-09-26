/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_TERM_DAYS = 7;
  const MEDIUM_TERM_DAYS = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DISCOUNT = 20;
  const numberOfDays = days;

  const baseCost = numberOfDays * DAILY_RATE;

  if (numberOfDays >= LONG_TERM_DAYS) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= MEDIUM_TERM_DAYS) {
    return baseCost - MEDIUM_TERM_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
