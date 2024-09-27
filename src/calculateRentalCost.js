/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let result = 0;

  if ((days) < 3) {
    result = (days) * 40;
  }

  if ((days) >= 3 && (days) < 7) {
    result = ((days) * 40) - 20;
  }

  if ((days) >= 7) {
    result = ((days) * 40) - 50;
  }

  return result;
}

module.exports = calculateRentalCost;
