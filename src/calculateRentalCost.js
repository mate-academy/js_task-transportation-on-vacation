/**
 * @param {number} days
 *
 * @return {number}
 */
const lightDiscount = 20;
const fullDiscount = 50;
const rentPrice = 40;

function calculateRentalCost(days) {
  if (!Number.isFinite(days) || days <= 0) {
    return 'Please enter valid number';
  }

  const total = days * rentPrice;

  if (days >= 7) {
    return total - fullDiscount;
  }

  if (days >= 3) {
    return total - lightDiscount;
  }

  return total;
}
module.exports = calculateRentalCost;
