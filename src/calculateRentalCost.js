/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  let total = days * 40;

  if (total >= 7) {
    total = total - 50;
  } else if (total >= 3) {
    total = total - 20;
  }

  return total;
}

module.exports = calculateRentalCost;
