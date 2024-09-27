/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40 * days;
  let discount = 0;
  if (days >= 7) {
    discount = 50;
  } else if (days >= 3) {
    discount = 20;
  }
  return cost - discount;
}

module.exports = calculateRentalCost;
