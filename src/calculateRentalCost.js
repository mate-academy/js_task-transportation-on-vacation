/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE_PER_DAY = 40; // Базова ціна за день
  const BASIC_DISCOUNT = 20; // Знижка для оренди від 3 до 6 днів
  const LONG_TERM = 7; // Кількість днів для довгострокової знижки
  const LONG_TERM_DISCOUNT = 50; // Додаткова знижка для оренди 7+ днів

  const basePrice = days * BASE_PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return basePrice - BASIC_DISCOUNT;
  }

  return basePrice; // Базова ціна без знижок
}

module.exports = calculateRentalCost;
