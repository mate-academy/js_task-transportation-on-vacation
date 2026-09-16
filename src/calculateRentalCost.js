/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const LONG_TIME = 7;
  const MID_TIME = 3;
  const LONG_TIME_DISCOUNT = 50;
  const MID_TIME_DISCOUNT = 20;
  const BASE_VALUE = 40;

  if (days >= LONG_TIME) {
    return days * BASE_VALUE - LONG_TIME_DISCOUNT;
  } else if (days >= MID_TIME) {
    return days * BASE_VALUE - MID_TIME_DISCOUNT;
  } else {
    return days * BASE_VALUE;
  }
}

module.exports = calculateRentalCost;
