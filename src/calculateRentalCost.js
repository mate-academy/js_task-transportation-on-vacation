/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const total = 40 * days;
  let discount = 0;

  if (days >= 3 && days < 7) {
    discount = 20;
  }

  if (days >= 7) {
    discount = 50;
  }

  return total - discount;
}

module.exports = calculateRentalCost;
