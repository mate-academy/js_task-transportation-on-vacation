/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let count = 0;

  if (days < 3) {
    count = days * 40;
  }

  if (days > 2 && days <= 6) {
    count = (days * 40) - 20;
  }

  if (days >= 7) {
    count = (days * 40) - 50;
  }

  return count;
}

module.exports = calculateRentalCost;
