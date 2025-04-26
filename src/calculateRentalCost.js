/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceOfDay = 40;
  const total = priceOfDay * days;

  if (days >= 7) {
    return total - 50;
  } else if (days >= 3) {
    return total - 20;
  }

  return total;
}

module.exports = calculateRentalCost;
