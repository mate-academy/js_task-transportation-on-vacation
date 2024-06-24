/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  // write code here
  const baseRateOneDay = 40;
  const THREE_DAYS = 3;
  const SEVEN_DAYS = 7;
  const DISCOUNT_20 = 20;
  const DISCOUNT_50 = 50;
  const totalCost = numberOfDays * baseRateOneDay;

  if (numberOfDays >= THREE_DAYS && numberOfDays < SEVEN_DAYS) {
    return totalCost - DISCOUNT_20;
  }

  if (numberOfDays >= SEVEN_DAYS) {
    return totalCost - DISCOUNT_50;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
