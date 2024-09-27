/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalRent = 40 * days;
  const smallDiscount = 20;
  const largeDiscount = 50;

  if (days >= 1 && days < 3) {
    return totalRent;
  }

  if (days >= 3 && days < 7) {
    return totalRent - smallDiscount;
  }

  return totalRent - largeDiscount;
}

module.exports = calculateRentalCost;
