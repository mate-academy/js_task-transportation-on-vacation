/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const NORM_RENT = days * 40;

  if (days >= 7) {
    return NORM_RENT - 50;
  }

  if (days >= 3) {
    return NORM_RENT - 20;
  }

  return NORM_RENT;
}

module.exports = calculateRentalCost;
