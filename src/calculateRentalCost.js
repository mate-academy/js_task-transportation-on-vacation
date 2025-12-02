/**
 * @param {number} days
 *
 * @return {number}
 */
// Константи для налаштувань
const DAILY_RATE = 40;
const BASIC_DISCOUNT_DAYS_MIN = 3;
const BASIC_DISCOUNT_DAYS_MAX = 6;
const EXTRA_DISCOUNT_DAYS = 7;

const BASIC_DISCOUNT = 20;
const EXTRA_DISCOUNT = 50;

function calculateRentalCost(days) {
  const cost = days * DAILY_RATE;

  if (days < BASIC_DISCOUNT_DAYS_MIN) {
    return cost;
  }

  if (days >= BASIC_DISCOUNT_DAYS_MIN && days <= BASIC_DISCOUNT_DAYS_MAX) {
    return cost - BASIC_DISCOUNT;
  }

  if (days >= EXTRA_DISCOUNT_DAYS) {
    return cost - EXTRA_DISCOUNT;
  }

  return cost; // fallback, хоча сюди ми не потрапимо
}

module.exports = calculateRentalCost;
