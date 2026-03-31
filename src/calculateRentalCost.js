function calculateRentalCost(days) {
  const PRICE_OF_DAY = 40;
  const MIN_DISCOUNT = 20;
  const MAX_DISCOUNT = 50;
  const SHORT_DAY_RENTAL = 3;
  const LONG_DAY_RENTAL = 7;
  const PRICE_ALL_DAYS = PRICE_OF_DAY * days;

  if (days >= LONG_DAY_RENTAL) {
    return PRICE_ALL_DAYS - MAX_DISCOUNT;
  }

  if (days >= SHORT_DAY_RENTAL) {
    return PRICE_ALL_DAYS - MIN_DISCOUNT;
  }

  return PRICE_ALL_DAYS;
}

module.exports = calculateRentalCost;
