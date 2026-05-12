/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let result = days * 40;

  if (days >= 3 && days < 7) {
    result -= 20;
  } else if (days >= 7) {
    result -= 50;
  }

  return result;
}

module.exports = calculateRentalCost;
