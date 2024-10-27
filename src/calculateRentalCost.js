/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  let discount = 0;
  const DAY_RENT = 40;

  if (days > 2 && days < 7) {
    discount = -20;
  }

  if (days >= 7) {
    discount = -50;
  }

  const TOTAL_RENT = days * DAY_RENT + discount;

  return TOTAL_RENT;
}

module.exports = calculateRentalCost;
