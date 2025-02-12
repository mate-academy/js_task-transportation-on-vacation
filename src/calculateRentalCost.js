/**
 * @param {number} days
 *
 * @return {number}
 */

const PRICE_PER_DAY = 40;

function calculateRentalCost(days) {
  // write code here
  if (days < 3) {
    return days * PRICE_PER_DAY
  }

  if (days < 7) {
    return (days * PRICE_PER_DAY) - 20
  }

  return (days * PRICE_PER_DAY) - 50;
}

module.exports = calculateRentalCost;
