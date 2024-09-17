/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const daysForSmallDiscout = 3;
  const daysForBigDiscout = 7;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days >= daysForSmallDiscout && days < daysForBigDiscout) {
    return days * pricePerDay - smallDiscount;
  } else if (days >= daysForBigDiscout) {
    return days * pricePerDay - bigDiscount;
  }

  return days * pricePerDay;
}

module.exports = calculateRentalCost;
