/**
 * @param {number} days
 *
 * @return {number}
 */
const oneday = 40;
const sevendays = 50;
const theedays = 20;

function calculateRentalCost(days) {
  let cost = days * oneday;

  if (days >= 7) {
    cost -= sevendays;
  } else if (days >= 3) {
    cost -= theedays;
  }

  return cost;
}
module.exports = calculateRentalCost;
