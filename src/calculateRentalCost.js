/**
 * Calculates the rental cost based on the number of days rented,
 * applying different discounts based on the duration.
 *
 * @param {number} days - The number of days the item is rented for.
 * @return {number} The total rental cost.
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const BASIC_DISCOUNT = 20;
  const ADDITIONAL_DISCOUNT = 50;
  const BASIC_DISCOUNT_THRESHOLD = 3;
  const ADDITIONAL_DISCOUNT_THRESHOLD = 7;

  if (days < BASIC_DISCOUNT_THRESHOLD) {
    return days * DAILY_RATE;
  }

  if (days < ADDITIONAL_DISCOUNT_THRESHOLD) {
    return days * DAILY_RATE - BASIC_DISCOUNT;
  }

  return days * DAILY_RATE - ADDITIONAL_DISCOUNT;
}

module.exports = calculateRentalCost;
