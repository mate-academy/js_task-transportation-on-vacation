/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days >= 7) {
    return days * 40 - 50;
  }

  if (days >= 3 && days <= 6) {
    return days * 40 - 20;
  }

  return days * 40;
}

module.exports = calculateRentalCost;
