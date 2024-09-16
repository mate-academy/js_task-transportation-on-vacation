/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const costDay = 40;
  const weekDiscount = 50;
  const threeDayDiscount = 20;
  const week = 7;
  const threeDay = 3;
  let total = 0;

  if (days >= week) {
    total = costDay * days - weekDiscount;

    return total;
  }

  if (days >= threeDay) {
    total = days * costDay - threeDayDiscount;

    return total;
  }

  total = days * costDay;

  return total;
}

module.exports = calculateRentalCost;
