/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let costs = 0;

  if (days < 3) {
    costs = days * 40;
  } else {
    if (days < 7) {
      costs = (days * 40) - 20;
    } else {
      costs = (days * 40) - 50;
    }
  }

  return costs;
}

module.exports = calculateRentalCost;
