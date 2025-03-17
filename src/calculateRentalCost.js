/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  if (days <= 2) {
    return days * 40;
  }

  if (days <= 6) {
    return days * 40 - 20;
  }

  if (days > 6) {
    return days * 40 - 50;
  }
}

module.exports = calculateRentalCost;
