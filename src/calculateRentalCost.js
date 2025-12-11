/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_AMOUNT = 40;
  const DISCOUNT_TERM = 3;
  const DISCOUNT_AMOUNT = 20;
  const SUPER_DISCOUNT_TERM = 7;
  const SUPER_DISCOUNT_AMOUNT = 50;

  const baseRent = days * RENT_AMOUNT;

  if (days < DISCOUNT_TERM) {
    return baseRent;
  }

  if (days >= SUPER_DISCOUNT_TERM) {
    return baseRent - SUPER_DISCOUNT_AMOUNT;
  }

  return baseRent - DISCOUNT_AMOUNT;
}

module.exports = calculateRentalCost;
