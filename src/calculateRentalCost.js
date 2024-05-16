/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const payPerDay = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;

  if (days < 3) {
    return days * payPerDay;
  }

  if (days >= 7) {
    return days * payPerDay - bigDiscount;
  }

  if (days >= 3) {
    return days * payPerDay - smallDiscount;
  }
}

module.exports = calculateRentalCost;
