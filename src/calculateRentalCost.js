/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const sum = days * 40;
  let result = sum;

  if (days >= 3) {
    result = sum - 20;
  }

  if (days >= 7) {
    result = sum - 50;
  }

  return result;
}

module.exports = calculateRentalCost;
