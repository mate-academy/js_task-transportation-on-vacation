/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let total = 0;

  if (days >= 7) {
    total = days * 40 - 50;
  } else if (days >= 3) {
    total = days * 40 - 20;
  } else {
    total = days * 40;
  }

  return total;
}

module.exports = calculateRentalCost;
