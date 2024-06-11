/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let discount = 0;

  if (days >= 1 && days < 3) {
    discount = 0;
  } else if (days >= 3 && days < 7) {
    discount = 20;
  } else if (days >= 7) {
    discount = 50;
  }

  const totalCost = days * 40 - discount;

  return totalCost;
}

module.exports = calculateRentalCost;
