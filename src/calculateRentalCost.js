/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_EVERY_DAY = 40;
  const DAYS_3 = 3;
  const DAYS_6 = 6;
  const DISCOUNT_DAYS3 = 20;
  const DISCOUNT_DAYS7 = 50;

  const price = days * PRICE_EVERY_DAY;

  if (days >= DAYS_3 && days <= DAYS_6) {
    return price - DISCOUNT_DAYS3;
  }

  if (days > DAYS_6) {
    return price - DISCOUNT_DAYS7;
  }

  return price;
}

module.exports = calculateRentalCost;
