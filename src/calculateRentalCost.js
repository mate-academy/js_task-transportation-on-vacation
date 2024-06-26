/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let total = days * 40;

  if (days >= 3 && days < 7) {
    total = total - 20;
  } else if (days >= 7) {
    total = total - 50;
  }

  return total;
}

module.exports = calculateRentalCost;
