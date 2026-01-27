/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days < 3) {
    return 40 * days;
  } else if (days < 7) {
    return 40 * days - 20;
  } else {
    return 40 * days - 50;
  }
}

module.exports = calculateRentalCost;
