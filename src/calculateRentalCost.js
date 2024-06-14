/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;

  if (days >= 7) {
    return days * dayPrice - 50;
  }

  if (days >= 3) {
    return days * dayPrice - 20;
  }

  return days * dayPrice;
}

module.exports = calculateRentalCost;
