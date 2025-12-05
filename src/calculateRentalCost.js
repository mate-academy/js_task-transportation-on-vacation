/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_3_DAYS = 20;
  const DISCOUNT_7_DAYS = 50;
  const MIN_DAYS_FOR_DISCOUNT_3 = 3;
  const MIN_DAYS_FOR_DISCOUNT_7 = 7;

  let totalCost = days * DAILY_RATE;

  if (days >= MIN_DAYS_FOR_DISCOUNT_7) {
    totalCost -= DISCOUNT_7_DAYS;

    return totalCost;
  }

  if (days >= MIN_DAYS_FOR_DISCOUNT_3) {
    totalCost -= DISCOUNT_3_DAYS;

    return totalCost;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
