const DAILY_RATE = 40;
const LONG_TERM_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_DAYS = 3;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  // First, calculate the base price
  const basePrice = days * DAILY_RATE;

  // Use an if with early return for the longest-term discount
  if (days >= LONG_TERM_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  // If the previous condition wasn't met, check for the next discount
  if (days >= SHORT_TERM_DAYS) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  // If no discounts apply, return the base price
  return basePrice;
}
