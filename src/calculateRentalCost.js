/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const total = days * 40;

  if (days < 3) {
    return total;
  }

  if (days < 7) {
    return total - 20;
  } else {
    return total - 50;
  }
}

module.exports = calculateRentalCost;
