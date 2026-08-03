/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days < 3) {
    return days * 40;
  }

  if (days < 7) {
    return days * 40 - 20;
  }

  if (days >= 7) {
    return days * 40 - 50;
  }
}

module.exports = calculateRentalCost;
