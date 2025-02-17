/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;

  if (days >= 3 && days < 7) {
    return days * price - 20;
  }

  if (days >= 7) {
    return days * price - 50;
  }

  return days * price;
}
module.exports = calculateRentalCost;
