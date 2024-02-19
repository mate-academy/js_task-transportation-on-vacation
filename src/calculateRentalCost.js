/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = days * 40 - 50;
  const MID_TERM = days * 40 - 20;
  const SHORT_TERM = days * 40;
  let total = 0;

  if (days >= 7) {
    total = LONG_TERM;
  } else if (days >= 3) {
    total = MID_TERM;
  } else if (days < 3) {
    total = SHORT_TERM;
  }

  return total;
}

module.exports = calculateRentalCost;
