/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days < 3) {
    return 40 * days;
  }

  if (days >= 3 && days < 7) {
    return 100 + 40 * (days - 3);
  }

  if (days >= 7) {
    return 220 + (days - 6) * 10;
  }
}

module.exports = calculateRentalCost;
