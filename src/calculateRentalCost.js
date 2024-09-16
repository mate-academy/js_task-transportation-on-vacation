/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENT = 40;
  const MID_TERM = 3;
  const LONG_TERM = 7;
  const MID_TERM_DISC = 20;
  const LONG_TERM_DISC = 50;
  const price = days * DAILY_RENT;

  if (days >= LONG_TERM) {
    return price - LONG_TERM_DISC;
  }

  if (days >= MID_TERM) {
    return price - MID_TERM_DISC;
  }

  return price;
}

module.exports = calculateRentalCost;
