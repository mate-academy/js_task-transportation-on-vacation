/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const bestDiscount = 50;
  const standardDiscount = 20;

  if (days >= 7) {
    return (dailyRate * days) - bestDiscount;
  }

  if (days >= 3) {
    return (dailyRate * days) - standardDiscount;
  }

  return dailyRate * days;
}

module.exports = calculateRentalCost;
