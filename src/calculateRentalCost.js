/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;
  const costPerDays = days * rentCost;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const smallDiscountPerDays = 3;
  const bigDiscountPerDays = 7;

  if (days < smallDiscountPerDays) {
    return costPerDays;
  }

  if (days < bigDiscountPerDays) {
    return costPerDays - smallDiscount;
  }

  return costPerDays - bigDiscount;
}

module.exports = calculateRentalCost;
