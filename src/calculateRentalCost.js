/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  let discount = 0;
  const dayRent = 40;

  if (days > 2 && days < 7) {
    discount = -20;
  }

  if (days >= 7) {
    discount = -50;
  }

  const totalRent = days * dayRent + discount;

  return totalRent;
}

module.exports = calculateRentalCost;
