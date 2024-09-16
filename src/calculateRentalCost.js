/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basicPrice = days * 40;

  if (days < 3) {
    return basicPrice;
  } else if (days < 7) {
    return basicPrice - 20;
  }
  return basicPrice - 50;
}

module.exports = calculateRentalCost;
