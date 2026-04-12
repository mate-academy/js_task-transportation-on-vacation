/**
 * @param {number} days
 *
 * @return {number}
 */
const lightDiscount = 20;
const fullDiscount = 50;
const rentPrice = 40;
const LONG_TERM_DAYS = 7;
const SHORT_TERM_DAYS = 3;

function calculateRentalCost(days) {
  if (!Number.isFinite(days) || days <= 0) {
    return 'Please enter valid number';
  }

  const total = days * rentPrice;

  if (days >= LONG_TERM_DAYS) {
    return total - fullDiscount;
  }

  if (days >= SHORT_TERM_DAYS) {
    return total - lightDiscount;
  }

  return total;
}
module.exports = calculateRentalCost;
