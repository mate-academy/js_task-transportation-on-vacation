function calculateRentalCost(days) {
  let cost = days * DAILY_RATE;

  if (days >= 30) {
    cost -= DISCOUNT_7_DAYS;
  } else if (days >= 7) {
    cost -= DISCOUNT_7_DAYS;
  } else if (days >= 3) {
    cost -= DISCOUNT_3_DAYS;
  }

  return cost;
}

module.exports = calculateRentalCost;
