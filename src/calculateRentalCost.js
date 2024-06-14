/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_COST = 40;
  let discount;

  if (days >= 7) {
    discount = 50;
  }

  if (days < 7) {
    discount = 20;
  }

  if (days < 3) {
    discount = 0;
  }

  const result = days * DAY_COST - discount;

  return result;
}
module.exports = calculateRentalCost;
