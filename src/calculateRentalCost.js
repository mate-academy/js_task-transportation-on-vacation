function calculateRentalCost(days) {
  const PRICE_OF_DAY = 40;
  const MIN_DISCOUNT = 20;
  const MAX_DISCOUNT = 50;

  if (days >= 7) {
    return days * PRICE_OF_DAY - MAX_DISCOUNT;
  }

  if (days >= 3) {
    return days * PRICE_OF_DAY - MIN_DISCOUNT;
  }

  if (days === 1 || days === 2) {
    return PRICE_OF_DAY * days;
  }
}

module.exports = calculateRentalCost;
