/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const costPerDay = 40;
  const total = days * costPerDay;
  const LONG_TERM = 7;
  const MEDIUM_TERM = 3;
  const longtermDiscount = 50;
  const mediumtermDiscount = 20;

  if (days >= LONG_TERM) {
    return total - longtermDiscount;
  }

  if (days >= MEDIUM_TERM) {
    return total - mediumtermDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
