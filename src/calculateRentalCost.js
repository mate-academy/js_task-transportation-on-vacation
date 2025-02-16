/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = days * 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days >= 7) {
    return dailyCost - bigDiscount;
  }

  if (days >= 3 && days < 7) {
    return dailyCost - smallDiscount;
  }

  return dailyCost;
}

module.exports = calculateRentalCost;
