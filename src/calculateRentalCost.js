/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const regularPrice = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const finalPrice = days * regularPrice;

  if (days >= 7) {
    return finalPrice - bigDiscount;
  }

  if (days >= 3) {
    return finalPrice - smallDiscount;
  }

  return finalPrice;
}

module.exports = calculateRentalCost;
