/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const basePrice = 40;
  const costPerDay = days * basePrice;
  const daysForBigDiscout = 7;
  const daysForSmallDiscout = 3;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days >= daysForBigDiscout) {
    return costPerDay - bigDiscount;
  }

  if (days >= daysForSmallDiscout) {
    return costPerDay - smallDiscount;
  }

  return costPerDay;
}

module.exports = calculateRentalCost;
