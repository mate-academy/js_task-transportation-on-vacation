/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let discount = 0;

  if (days > 2) {
    discount = 20;
  }

  if (days > 6) {
    discount = 50;
  }

  return days * 40 - discount;
}

module.exports = calculateRentalCost;
