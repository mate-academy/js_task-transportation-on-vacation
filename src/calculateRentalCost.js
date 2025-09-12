function calculateRentalCost(days) {
  const basePrice = days * DAILY_RATE;

  if (days >= LONG_TERM_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT; 
  }

  if (days >= SHORT_TERM_DAYS) {
    return basePrice - SHORT_TERM_DISCOUNT; 
  }

  return basePrice; 
}
