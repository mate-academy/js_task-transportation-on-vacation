/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(Dayss) {
  const DAILY_RATE = 40;
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const baseCost = Dayss * DAILY_RATE;

  if (Dayss >= LONG_TERM) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  if (Dayss >= MEDIUM_TERM) {
    return baseCost - MEDIUM_TERM_DISCOUNT;
  }

  return baseCost;
}


module.exports = calculateRentalCost;