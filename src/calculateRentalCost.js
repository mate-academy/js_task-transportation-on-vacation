/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST = 40;
  const LONG_RENT = 7;
  const SHORT_RENT = 3;
  let discount = 0;

  if (days >= LONG_RENT) {
    discount = 50;
  } else if (days >= SHORT_RENT) {
    discount = 20;
  }

  return days * COST - discount;
}

module.exports = calculateRentalCost;
