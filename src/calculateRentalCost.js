/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  let result = 0;

  if (days < 3) {
    result = days * cost;
  }

  if (days >= 3) {
    result = days * cost - 20;
  }

  if (days >= 7) {
    result = days * cost - 50;
  }

  return result;
}

module.exports = calculateRentalCost;
