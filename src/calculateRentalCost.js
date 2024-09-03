/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const LONG_VACATION = 7;
  const LONG_VACATION_DISCOUNT = 50;
  const SHORT_VACATION = 3;
  const SHORT_VACATION_DISCOUNT = 20;
  const standartPrice = days * COST_PER_DAY;

  if (days >= LONG_VACATION) {
    return (standartPrice - LONG_VACATION_DISCOUNT);
  }

  if (days >= SHORT_VACATION) {
    return (standartPrice - SHORT_VACATION_DISCOUNT);
  }

  return standartPrice;
}

module.exports = calculateRentalCost;
