/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  const discountMax = 50;
  const discountMin = 20;
  if (days >= 7) {
    return days * cost - discountMax;
  } else if (days >= 3) {
    return days * cost - discountMin;
  } else {
    return days * cost;
  }
}
module.exports = calculateRentalCost;
