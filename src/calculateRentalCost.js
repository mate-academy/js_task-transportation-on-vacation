/**
 * @param {number} days
 *
 * @return {number}
 */

const DAY__COST = 40;
const DISCOUNT__3__DAY__COST = 20;
const DISCOUNT__7__DAY__COST = 50;

function calculateRentalCost(days) {
  const total = days * DAY__COST;

  if (days >= 7) {
    return total - DISCOUNT__7__DAY__COST;
  }

  if (days >= 3) {
    return total - DISCOUNT__3__DAY__COST;
  }

  return total;
}

module.exports = calculateRentalCost;
