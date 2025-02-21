/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  let daysCount = days * 40;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    daysCount -= 20;
  } else if (days >= LONG_TERM) {
    daysCount -= 50;
  }

  return daysCount;
}

module.exports = calculateRentalCost;
