function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const DISCOUNT_FOR_SEVEN_DAYS = 50;
  const DISCOUNT_FOR_THREE_DAYS = 20;

  let total = days * COST_PER_DAY;

  if (days >= 7) {
    return total - DISCOUNT_FOR_SEVEN_DAYS;
  }

  if (days >= 3) {
    return total - DISCOUNT_FOR_THREE_DAYS;
  }

  return total;
}

module.exports = calculateRentalCost;


