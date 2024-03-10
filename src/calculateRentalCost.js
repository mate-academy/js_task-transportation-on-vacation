/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  if (days < 3) {
    return days * 40;
  } else if (days >= 3 && days < 7) {
    return days * 40 - 20;
  } else if (days >= 7) {
    return days * 40 - 50;
  }
}

module.exports = calculateRentalCost;
