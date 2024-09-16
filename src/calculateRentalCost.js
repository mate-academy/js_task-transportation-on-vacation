/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const threeDayDiscount = 20;
  const sevenDayDiscount = 50;
  const cost = days * 40;

  if (days < 3) {
    return cost;
  }

  if (days < 7) {
    return cost - threeDayDiscount;
  }

  return cost - sevenDayDiscount;
}

module.exports = calculateRentalCost;
