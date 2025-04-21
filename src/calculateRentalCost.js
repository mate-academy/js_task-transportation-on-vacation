function calculateRentalCost(days) {
  const RENT_PER_DAY = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  const totalRentalCost = days * RENT_PER_DAY;

  if (days >= LONG_TERM) {
    return totalRentalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return totalRentalCost - SHORT_TERM_DISCOUNT;
  }

  return totalRentalCost;
}

module.exports = calculateRentalCost;
