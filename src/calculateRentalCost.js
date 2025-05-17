/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  let discount = 0;
  let totalCost = days * COST_PER_DAY;

  // write code here
  if (days < 1) {
    return 0;
  }

  if (days >= 7) {
    discount = 50;

    return (totalCost -= discount);
  }

  if (days >= 3) {
    discount = 20;

    return (totalCost -= discount);
  }

  return totalCost;
}

module.exports = calculateRentalCost;
