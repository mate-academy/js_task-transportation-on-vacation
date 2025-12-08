/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let discount = 0;

  if (days >= 7) {
    discount = 50;
  } else if (days >= 3) {
    discount = 20;
  }

  const totalSum = 40 * days - discount;

  return totalSum;
}

module.exports = calculateRentalCost;
