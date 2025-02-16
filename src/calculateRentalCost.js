/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let result = 0;
  const costs = 40;

  if (days < 3) {
    result += days * costs;
  } else if (days >= 3 && days < 7) {
    result += (costs * days) - 20;
  } else if (days >= 7) {
    result += (costs * days) - 50;
  }

  return result;
}

module.exports = calculateRentalCost;
