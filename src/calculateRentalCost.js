/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const totalCost = price * days;
  let discount = 0;

  if (days >= 7) {
    discount = 50;
  }

  if (days >= 3 && days < 7) {
    discount = 20;
  }

  return totalCost - discount;
}

module.exports = calculateRentalCost;
