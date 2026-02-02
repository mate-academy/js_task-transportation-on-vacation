/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const BASIC_DISCOUNT_DAYS = 3;
  const BASIC_DISCOUNT_AMOUNT = 20;
  const EXTENDED_DISCOUNT_DAYS = 7;
  const EXTENDED_DISCOUNT_AMOUNT = 50;

  const total = days * PRICE_PER_DAY;

  if (days >= EXTENDED_DISCOUNT_DAYS) {
    return total - EXTENDED_DISCOUNT_AMOUNT;
  }

  if (days >= BASIC_DISCOUNT_DAYS) {
    return total - BASIC_DISCOUNT_AMOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
