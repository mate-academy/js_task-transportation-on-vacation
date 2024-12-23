/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let cost = days * 40;

  if (days < 3) {
    return cost;
  } else {
    if (days < 7) {
      cost = cost - 20;
    } else {
      cost = cost - 50;
    }
  }

  return cost;
}

module.exports = calculateRentalCost;
