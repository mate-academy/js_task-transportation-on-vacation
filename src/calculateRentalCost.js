/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40 * days;

  if (days >= 7) {
    return price - 50;
  }

  if (days >= 3) {
    return price - 20;
  }

  return price;
}

module.exports = calculateRentalCost;
