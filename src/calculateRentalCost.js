/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BIG_VACATION_DISCOUNT_DAYS = 7;
  const BIG_VACATION_DISCOUNT_VALUE = 50;

  const SMALL_VACATION_DISCOUNT_DAYS = 3;
  const SMALL_VACATION_DISCOUNT_VALUE = 20;

  const price = days * 40;

  if (days >= BIG_VACATION_DISCOUNT_DAYS) {
    return price - BIG_VACATION_DISCOUNT_VALUE;
  }

  if (days >= SMALL_VACATION_DISCOUNT_DAYS) {
    return price - SMALL_VACATION_DISCOUNT_VALUE;
  }

  return price;
}

module.exports = calculateRentalCost;
