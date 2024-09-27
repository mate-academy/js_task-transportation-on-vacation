/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let result = days * 40;

  if (days >= 3 && days < 7) {
    result -= 20;
  }

  if (days >= 7) {
    result = result - 50;
  }

  return result;
}

module.exports = calculateRentalCost;
