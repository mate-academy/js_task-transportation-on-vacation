/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;

  const ADDED_DAYS_DISCOUNTS = {
    3: 20,
    7: 30,
  };

  let sum = days * COST_PER_DAY;

  for (const daysCount of Object.keys(ADDED_DAYS_DISCOUNTS)) {
    if (days >= daysCount) {
      sum -= ADDED_DAYS_DISCOUNTS[daysCount];
    }
  }

  return sum;
}

module.exports = calculateRentalCost;
