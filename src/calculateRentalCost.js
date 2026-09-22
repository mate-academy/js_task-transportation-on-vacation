const DAILY_RENTAL_COST = 40;
const MIN_DAYS_FOR_LARGE_DISCOUNT = 7;
const LARGE_DISCOUNT = 50;
const MIN_DAYS_FOR_SMALL_DISCOUNT = 3;
const SMALL_DISCOUNT = 20;

function calculateRentalCost(days) {
  const baseCost = days * DAILY_RENTAL_COST;

  if (days >= MIN_DAYS_FOR_LARGE_DISCOUNT) {
    return baseCost - LARGE_DISCOUNT;
  }

  if (days >= MIN_DAYS_FOR_SMALL_DISCOUNT) {
    return baseCost - SMALL_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
