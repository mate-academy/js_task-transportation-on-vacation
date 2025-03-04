/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyPrice = 40;
  let cost = dailyPrice * days;
  const LONG_TERM = 7;
  const LONG_DISCOUNT = 50;
  const MEDIUM_TERM = 3;
  const MEDIUM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    cost = cost - LONG_DISCOUNT;
  } else if (days >= MEDIUM_TERM && days < LONG_TERM) {
    cost = cost - MEDIUM_DISCOUNT;
  }

  return cost;
}

module.exports = calculateRentalCost;
