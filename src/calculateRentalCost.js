/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  let discount = 0;
  const priceForDay = 40;
  const count = days * priceForDay;

  if (days >= 3) {
    discount = 20;
  }

  if (days >= 7) {
    discount = 50;
  }

  return count - discount;
}

module.exports = calculateRentalCost;
