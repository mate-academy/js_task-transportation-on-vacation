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

  return days * 40 - 50 * Math.trunc(days / 7);
}

module.exports = calculateRentalCost;
