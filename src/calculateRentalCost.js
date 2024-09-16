/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days >= 7) {
    return (days * 40) - 50;
  } else if (days >= 3) {
    return (days * 40) - 20;
  } else {
    return days * 40;
  }
}

module.exports = calculateRentalCost;
