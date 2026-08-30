/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const totalSum = days * 40;
  let discount = 0;

  if (days >= LONG_TERM) {
    discount = 50;
  } else if (days >= SHORT_TERM) {
    discount = 20;
  }

  return totalSum - discount;
}

module.exports = calculateRentalCost;
