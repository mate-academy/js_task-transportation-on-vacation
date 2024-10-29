/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const result = 40 * days;

  if (days >= 7) {
    return result - 50;
  } else if (days >= 3) {
    return result - 20;
  } else {
    return result;
  }
}

module.exports = calculateRentalCost;
