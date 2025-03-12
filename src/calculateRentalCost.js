/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_3_TO_6_DAYS = 20;
  const DISCOUNT_7_OR_MORE_DAYS = 50;

  if (days < 3) {
    return DAILY_RATE * days;
  }

  let totalCost = DAILY_RATE * days;

  if (days >= 7) {
    totalCost -= DISCOUNT_7_OR_MORE_DAYS;
  } else if (days >= 3) {
    totalCost -= DISCOUNT_3_TO_6_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
