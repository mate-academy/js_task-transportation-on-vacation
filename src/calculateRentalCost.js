/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // Constants for pricing and discount rules
  const DAILY_RATE = 40;
  const MINIMUM_DISCOUNT_DAYS = 3;
  const LONG_TERM_RENTAL_DAYS = 7;
  const STANDARD_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  // Calculate base price before discounts
  const basePrice = days * DAILY_RATE;

  // Apply long-term discount if 7 or more days
  if (days >= LONG_TERM_RENTAL_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  // Apply standard discount if 3 to 6 days
  if (days >= MINIMUM_DISCOUNT_DAYS && days < LONG_TERM_RENTAL_DAYS) {
    return basePrice - STANDARD_DISCOUNT;
  }

  // Return base price if no discounts apply (less than 3 days)
  return basePrice;
}

module.exports = calculateRentalCost;
