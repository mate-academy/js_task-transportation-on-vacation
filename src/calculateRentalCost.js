/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;

  if (days < 3 && days > 0) {
    return days * costPerDay;
  }

  if (days >= 3 && days <= 6) {
    return days * costPerDay - smallDiscount;
  }

  if (days >= 7) {
    return days * costPerDay - bigDiscount;
  }

  return 0;
}

module.exports = calculateRentalCost;
