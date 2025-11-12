/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_RATE = 40;
  const SEVEN_DAY_DISCOUNT = 50;
  const SEVEN_DAY_THRESHOLD = 7;
  const THREE_DAY_DISCOUNT = 20;
  const THREE_DAY_THRESHOLD = 3;

  const finalCost = days * DAILY_RATE;

  if (days >= SEVEN_DAY_THRESHOLD) {
    return finalCost - SEVEN_DAY_DISCOUNT;
  }

  if (days >= THREE_DAY_THRESHOLD) {
    return finalCost - THREE_DAY_DISCOUNT;
  }

  return finalCost;
}

module.exports = calculateRentalCost;
