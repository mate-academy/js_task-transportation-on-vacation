/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;

  if (days <= 2) {
    return days * price;
  }

  if (days <= 6) {
    return days * price - 20;
  }

  return days * price - 50;
}

module.exports = calculateRentalCost;
