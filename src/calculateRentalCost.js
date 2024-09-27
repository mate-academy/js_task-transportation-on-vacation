/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const a = days * 40;

  if (days < 3) {
    return a;
  }

  if (days < 7) {
    return a - 20;
  }

  if (days >= 7) {
    return a - 50;
  }
}

module.exports = calculateRentalCost;
