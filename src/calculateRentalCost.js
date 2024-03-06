/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const MIN_DISCOUNT = 20;
  const MAX_DISCOUNT = 50;
  const PRICE = 40;
  const MIN_DAYS = 3;
  const MAX_DAYS = 6;

  if (days < MIN_DAYS) {
    return days * PRICE;
  }

  if (days <= MAX_DAYS) {
    return days * PRICE - MIN_DISCOUNT;
  }

  return days * PRICE - MAX_DISCOUNT;
}

module.exports = calculateRentalCost;
