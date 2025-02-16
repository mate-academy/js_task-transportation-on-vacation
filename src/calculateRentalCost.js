/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  const threeDays = 3;
  const sevenDays = 7;
  const bigDiscount = 50;
  const smallDiscount = 20;

  if (days < threeDays) {
    return days * cost;
  }

  if (days >= threeDays && days < sevenDays) {
    return days * cost - smallDiscount;
  }

  if (days >= sevenDays) {
    return days * cost - bigDiscount;
  }
}

module.exports = calculateRentalCost;
