function calculateRentalCost(days) {
  const DAILY_RATE = 40;           // Фиксированная стоимость аренды за день
  const BIG_DISCOUNT = 50;         // Скидка при аренде 7 и более дней
  const SMALL_DISCOUNT = 20;       // Скидка при аренде от 3 до 6 дней
  const LONG_TERM_RENTAL_DAYS = 7; // Дней для большой скидки
  const MID_TERM_RENTAL_DAYS = 3;  // Дней для средней скидки

  const totalCost = days * DAILY_RATE; // Общая стоимость аренды

  // Применяем скидки и возвращаем стоимость
  if (days >= LONG_TERM_RENTAL_DAYS) {
    return totalCost - BIG_DISCOUNT;
  }

  if (days >= MID_TERM_RENTAL_DAYS) {
    return totalCost - SMALL_DISCOUNT;
  }

  return totalCost; // Если арендовано меньше 3 дней скидка не применяется
}

module.exports = calculateRentalCost;

