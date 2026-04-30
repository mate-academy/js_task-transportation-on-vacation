function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const SHORT_PRICE = 20;
  const LONG_PRICE = 50;
  const DAYLY_PRICE = 40;

  if (days >= LONG_TERM) {
    return days * DAYLY_PRICE - LONG_PRICE;
  } else if (days >= SHORT_TERM) {
    return days * DAYLY_PRICE - SHORT_PRICE;
  } else {
    return days * DAYLY_PRICE;
  }
}

module.exports = calculateRentalCost;
