/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carPrice = 40;

  if (days >= 7) {
    return days * carPrice - 50;
  } else if (days >= 3 && days < 7) {
    return days * carPrice - 20;
  } else {
    return days * carPrice;
  }
}
module.exports = calculateRentalCost;
