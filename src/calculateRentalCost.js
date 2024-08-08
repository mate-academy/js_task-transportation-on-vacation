/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const result = days * 40;

  if (days >= 7) {
    return result - 50;
  } else if (days >= 3) {
    return result - 20;
  }

  return result;
}

module.exports = calculateRentalCost;
