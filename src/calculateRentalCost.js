function calculateRentalCost(days) {
  const DAILY_PRICE = 40;
  const BASIC_DISCOUNT_DAYS = 3;
  const BASIC_DISCOUNT = 20;
  const EXTRA_DISCOUNT_DAYS = 7;
  const EXTRA_DISCOUNT = 50;

  const totalPrice = days * DAILY_PRICE;

  if (days >= EXTRA_DISCOUNT_DAYS) {
    return totalPrice - EXTRA_DISCOUNT;
  }

  if (days >= BASIC_DISCOUNT_DAYS) {
    return totalPrice - BASIC_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
