/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDay = 40;
  const minDiscount = 20;
  const maxDiscount = 50;
  const minDayMinDis = 3;
  const Xdays = 6;
  const maxDayMaxDis = 7;

  if (days < minDayMinDis) {
    return days * oneDay;
  }

  if (days >= minDayMinDis && days <= Xdays) {
    return days * oneDay - minDiscount;
  }

  if (days >= maxDayMaxDis) {
    return days * oneDay - maxDiscount;
  }
}

module.exports = calculateRentalCost;
