function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;
  const LONG_TERM_RENTAL_DAYS = 7;
  const MID_TERM_RENTAL_DAYS = 3;

  const totalCost = days * DAILY_RATE;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return totalCost - BIG_DISCOUNT;
  }

  if (days >= MID_TERM_RENTAL_DAYS) {
    return totalCost - SMALL_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;

