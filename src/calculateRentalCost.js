/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyPrice = 40;
  const maxDiscount = 50;
  const minDiscount = 20;

  if (days >= 7) {
    return (dailyPrice * days) - maxDiscount;
  }

  if (days >= 3) {
    return (dailyPrice * days) - minDiscount;
  }

  return dailyPrice * days;
}

module.exports = calculateRentalCost;
