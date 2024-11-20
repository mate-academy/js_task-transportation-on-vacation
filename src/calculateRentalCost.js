/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const ordinaryPriceForDay = 40;
  const termLongRent = 7;
  const getOffLongRent = 50;
  const termMiddleRent = 3;
  const getOffMiddleRent = 20;

  if (days >= termLongRent) {
    return days * ordinaryPriceForDay - getOffLongRent;
  }

  if (days >= termMiddleRent) {
    return days * ordinaryPriceForDay - getOffMiddleRent;
  }

  return days * ordinaryPriceForDay;
}

module.exports = calculateRentalCost;
