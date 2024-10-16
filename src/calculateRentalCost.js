/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days >= 3 && days < 6) {
    return 40 * days - 20;
  }

  if (days === 6) {
    return 40 * days - 20;
  }

  if (days >= 7) {
    return 40 * days - 50;
  }

  return 40 * days;
}

module.exports = calculateRentalCost;
