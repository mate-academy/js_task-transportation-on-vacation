/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const result = price * days;

  if (days >= 3 && days < 7) {
    return result - 20;
  }

  if (days >= 7 && days) {
    return result - 50;
  }

  return result;
}

module.exports = calculateRentalCost;
