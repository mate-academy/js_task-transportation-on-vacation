/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sum = 40 * days;
  let discount = 0;

  if (days >= 3) {
    discount = 20;
  }

  if (days >= 7) {
    discount = 50;
  }

  sum = sum - discount;

  return sum;
}

module.exports = calculateRentalCost;
