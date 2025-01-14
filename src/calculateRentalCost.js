/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const daysTotal = days * 40;

  if (days < 3) {
    return daysTotal;
  } else if (days >= 3 && days < 7) {
    return daysTotal - 20;
  } else if (days >= 7) {
    return daysTotal - 50;
  }
}

module.exports = calculateRentalCost;
