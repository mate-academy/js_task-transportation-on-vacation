/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days < 3) {
    return 40 * days;
  } else if (days >= 3 && days <= 6) {
    return 40 * days - 20;
  } else if (days >= 7) {
    return 40 * days - 50;
  }
}

module.exports = calculateRentalCost;
