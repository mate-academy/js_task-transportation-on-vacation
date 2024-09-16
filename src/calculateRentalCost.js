/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalRent = days * 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days >= 3 && days < 7) {
    return totalRent - smallDiscount;
  }

  if (days >= 7) {
    return totalRent - bigDiscount;
  }

  return totalRent;
}

module.exports = calculateRentalCost;
