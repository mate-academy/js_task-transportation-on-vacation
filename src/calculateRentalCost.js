/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASIC_PRICE_PER_DAY = 40;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const fullPrice = BASIC_PRICE_PER_DAY * days;

  if (days >= 7) {
    return fullPrice - BIG_DISCOUNT;
  }

  if (days >= 3) {
    return fullPrice - SMALL_DISCOUNT;
  }

  return fullPrice;
}

module.exports = calculateRentalCost;
