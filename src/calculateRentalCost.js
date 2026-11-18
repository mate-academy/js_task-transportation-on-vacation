/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const daylyRentRate = 40;
  const minorDiscount = 20;
  const majorDiscount = 50;
  const minorDiscountDayCount = 3;
  const majorDiscountDayCount = 7;

  if (days >= majorDiscountDayCount) {
    return daylyRentRate * days - majorDiscount;
  }

  if (days >= minorDiscountDayCount) {
    return daylyRentRate * days - minorDiscount;
  }

  return daylyRentRate * days;
}

module.exports = calculateRentalCost;
