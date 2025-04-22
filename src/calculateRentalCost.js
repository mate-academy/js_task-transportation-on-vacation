/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  const discount = 20;
  const bigDiscount = 50;
  const longPeriod = 7;
  const shortPeriod = 3;

  if (days < shortPeriod) {
    return days * cost;
  } else if (days < longPeriod) {
    return days * cost - discount;
  } else {
    return days * cost - bigDiscount;
  }
}

module.exports = calculateRentalCost;
