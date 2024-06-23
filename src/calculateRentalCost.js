/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const baseRateOneDay = 40;
  const THREE_DAYS = 3;
  const SEVEN_DAYS = 7;
  const DISCOUNT_20 = 20;
  const DISCOUNT_50 = 50;
  let totalCost = days * baseRateOneDay;

  if (days >= THREE_DAYS && days < SEVEN_DAYS) {
    totalCost -= DISCOUNT_20;
  } else if (days >= SEVEN_DAYS) {
    totalCost -= DISCOUNT_50;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
