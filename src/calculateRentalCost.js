/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  if (days >= 7) {
    return (40 * days) - 50;
  } else {
    if (days >= 3) {
      return (40 * days) - 20;
    } else {
      if (days < 3) {
        return (40 * days);
      }
    }
  }
}

module.exports = calculateRentalCost;
