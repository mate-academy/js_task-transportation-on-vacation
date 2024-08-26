/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let result = days * 40;

  if (days >= 7) {
    result -= 50;

    return result;
  }

  if (days >= 3) {
    result -= 20;

    return result;
  }

  return result;
}

module.exports = calculateRentalCost;
