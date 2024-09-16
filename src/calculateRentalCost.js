/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;
  const fullDaysPrice = days * costPerDay;

  if (days < 3) {
    return fullDaysPrice;
  }

  return days >= 7 ? fullDaysPrice - bigDiscount
    : fullDaysPrice - smallDiscount;
}

module.exports = calculateRentalCost;
