/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let result = days * 40;
  if (days >= 7) {
    result -= 50;
  } else if (days >= 3) {
    result -= 20;
  }

  return result;
}

module.exports = calculateRentalCost;
