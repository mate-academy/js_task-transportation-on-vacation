function calculateRentalCost(days) {
  const DAILY_RENTAL_PRICE = 40;
  const LONG_TERM_THRESHOLD = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_THRESHOLD = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const totalBasePrice = days * DAILY_RENTAL_PRICE;

  if (days >= LONG_TERM_THRESHOLD) {
    return totalBasePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_THRESHOLD) {
    return totalBasePrice - SHORT_TERM_DISCOUNT;
  }

  return totalBasePrice;
}

module.exports = calculateRentalCost;
