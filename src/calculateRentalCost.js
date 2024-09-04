function calculateRentalCost(days) {
  const PRICE_ONE_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const SHORT__TERM = 3;
  let totalPrice = PRICE_ONE_DAY * days;

  if (days >= LONG_TERM) {
    totalPrice -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT__TERM) {
    totalPrice -= SHORT_TERM_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
