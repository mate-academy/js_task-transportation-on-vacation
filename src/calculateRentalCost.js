/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const MID_TERM_DAYS = 3;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const DAILY_RATE = 40;
  let cost = 0;

  if (days >= MID_TERM_DAYS) {
    if (days >= LONG_TERM_DAYS) {
      cost = DAILY_RATE * days - LONG_TERM_DISCOUNT;

      return cost;
    }
    cost = DAILY_RATE * days - MID_TERM_DISCOUNT;

    return cost;
  }
  cost = DAILY_RATE * days;

  return cost;
}

module.exports = calculateRentalCost;
