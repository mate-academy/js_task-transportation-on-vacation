/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const COST_PER_DAY = 40;
  const THREE_DAYS_DISCOUNT = 20;
  const SEVEN_DAYS_DISCOUNT = 50;

  if (days < 3) {
    return COST_PER_DAY * days;
  }

  if (days >= 3 && days < 7) {
    return (COST_PER_DAY * days) - THREE_DAYS_DISCOUNT;
  }

  if (days >= 7) {
    return (COST_PER_DAY * days) - SEVEN_DAYS_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
