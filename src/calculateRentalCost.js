const DAILY_RENTAL_COST = 40;
const THREE_DAYS_DISCOUNT = 20;
const SEVEN_DAYS_DISCOUNT = 50;
const THREE_DAYS_LIMIT = 3;
const SEVEN_DAYS_LIMIT = 7;

function calculateRentalCost(days) {
  const totalCost = days * DAILY_RENTAL_COST;

  if (days >= SEVEN_DAYS_LIMIT) {
    return totalCost - SEVEN_DAYS_DISCOUNT;
  }

  if (days >= THREE_DAYS_LIMIT) {
    return totalCost - THREE_DAYS_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
