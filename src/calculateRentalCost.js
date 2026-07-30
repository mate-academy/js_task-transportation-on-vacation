/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const res = 40;

  if (days < 3) {
    return days * res;
  }

  if (days < 7) {
    return days * res - 20;
  }

  if (days >= 7) {
    return days * res - 50;
  }
  // write code here
}

module.exports = calculateRentalCost;
