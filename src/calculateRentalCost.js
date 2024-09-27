/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let total = days * 40;

  if (days < 3) {
    total = days * 40;
  } else if (days >= 3 && days < 7) {
    total -= 20;
  } else if (days >= 7) {
    total -= 50;
  }

  return total;
}

module.exports = calculateRentalCost;
