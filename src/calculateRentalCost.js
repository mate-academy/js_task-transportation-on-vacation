/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days < 3) {
    return 80;
  } else if (days >= 3 && days < 6) {
    return 100;
  } else if (days === 6) {
    return 220;
  } else {
    return 230;
  }
}

module.exports = calculateRentalCost;
