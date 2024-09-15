/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const defaultPrice = days * 40;

  if (days < 3) {
    return defaultPrice;
  } else if (days < 7) {
    return defaultPrice - 20;
  } else {
    return defaultPrice - 50;
  }
}

module.exports = calculateRentalCost;
