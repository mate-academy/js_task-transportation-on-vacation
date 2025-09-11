// Constants for rates and discounts
const DAILY_RATE = 40;
const SHORT_TERM_DAYS = 3;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  // Calculate the base price
  const basePrice = days * DAILY_RATE;

  // Apply long-term discount first
  if (days >= LONG_TERM_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  // Apply short-term discount
  if (days >= SHORT_TERM_DAYS) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  // No discount applies
  return basePrice;
}

// Export the function if using modules
export default calculateRentalCost;
