/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let total = 0;

  if (days <= 2) {
    total = days * 40;
  } else if (days >= 3 && days <= 6) {
    total = days * 40 - 20;
  } else if (days >= 7) {
    total = days * 40 - 50;
  }

  return total;
}

module.exports = calculateRentalCost;
