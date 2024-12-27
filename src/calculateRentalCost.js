/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const basePrice = days * PRICE_PER_DAY;

  // Логика скидок
  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT; // Скидка $50 для 7 или более дней
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return basePrice - SHORT_TERM_DISCOUNT; // Скидка $20 для 3–6 дней
  }

  return basePrice;
}

module.exports = calculateRentalCost;
