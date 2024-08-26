/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 2;
  const LONG_TERM = 7;
  const PRICE = 40;
  let sale = 0;

  if (days > SHORT_TERM && days < LONG_TERM) {
    sale = 20;
  }

  if (days >= LONG_TERM) {
    sale = 50;
  }

  return days * PRICE - sale;
}

module.exports = calculateRentalCost;
