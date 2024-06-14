/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let result = 0;
  const DAY_COST = 40;
  let discount = 0;

  for (let n = 1; n <= days; n++) {
    if (n >= 7) {
      discount = 50;
    }

    if (n < 7) {
      discount = 20;
    }

    if (n < 3) {
      discount = 0;
    }

    result = n * DAY_COST - discount;
  }

  return result;
}
module.exports = calculateRentalCost;
