/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40; // Cost per day of rental
  const LONG_TERM = 7; // Minimum days required for long-term discount
  const LONG_TERM_DISCOUNT = 50; // Discount applied for rentals of 7 or more
  const MID_TERM = 3; // Minimum days required for mid-term discount
  const MID_TERM_DISCOUNT = 20; // Discount applied for rentals of 3 to 6 days

  const basePrice = days * DAILY_RATE;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return basePrice - MID_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
