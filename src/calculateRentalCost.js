/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let discount = 0;
  const price = days * 40;

  if (days >= 3 && days < 7) {
    discount = 20;
  }

  if (days >= 7) {
    discount = 50;
  }

  return price - discount;
}

module.exports = calculateRentalCost;
