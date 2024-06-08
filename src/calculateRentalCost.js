/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const DAILY_RATE = 40;
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const baseCost = numberOfDays * DAILY_RATE;

  if (numberOfDays >= LONG_TERM) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= MEDIUM_TERM) {
    return baseCost - MEDIUM_TERM_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
