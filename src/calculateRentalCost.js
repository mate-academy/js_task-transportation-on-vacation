/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCosts = 40;
  const totalCost = dayCosts * days;
  const baseDiscount = 20;
  const largeDiscount = 50;

  if (days >= 7) {
    return (totalCost - largeDiscount);
  }

  if (days >= 3) {
    return (totalCost - baseDiscount);
  }

  return totalCost;
}

module.exports = calculateRentalCost;
