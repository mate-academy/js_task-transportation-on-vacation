/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const WEEK_DISCOUND = 50;
  const DAYS_DISCOUND = 20;
  const COUNT = days * 40;

  if (days >= 7) {
    return COUNT - WEEK_DISCOUND;
  }

  if (days >= 3) {
    return COUNT - DAYS_DISCOUND;
  }

  return COUNT;
}

module.exports = calculateRentalCost;
