/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  let discount = 0;

  if (days >= 3) {
    discount = 20;
  }

  if (days >= 7) {
    discount = 50;
  }

  return cost * days - discount;
}

module.exports = calculateRentalCost;
