/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_RATE = 40;
  const DISCOUNT_7_DAYS = 50;
  const DISCOUNT_3_DAYS = 20;

  const totalCost = days * DAILY_RATE;

  if (days >= 7) {
    return totalCost - DISCOUNT_7_DAYS; // Знижка для 7 і більше днів
  }

  if (days >= 3) {
    return totalCost - DISCOUNT_3_DAYS; // Знижка для 3 і більше днів
  }

  return totalCost;
}

module.exports = calculateRentalCost;
