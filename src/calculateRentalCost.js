/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const AMOUNT_PER_DAY = 40;
  const TOTAL_AMOUNT = days * AMOUNT_PER_DAY;
  const SMALL_DISCOUN = 20;
  const BIG_DISCOUNT = 50;
  const DAYS_FOR_SMALL_DISCOUNT = 3;
  const DAYS_FOR_BIG_DISCOUNT = 7;

  if (days >= DAYS_FOR_SMALL_DISCOUNT && days < DAYS_FOR_BIG_DISCOUNT) {
    return TOTAL_AMOUNT - SMALL_DISCOUN;
  }

  if (days >= DAYS_FOR_BIG_DISCOUNT) {
    return TOTAL_AMOUNT - BIG_DISCOUNT;
  }

  return TOTAL_AMOUNT;
}

module.exports = calculateRentalCost;
