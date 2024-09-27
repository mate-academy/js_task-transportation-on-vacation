/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = days * 40;
  const discountShortTerm = 20;
  const discountLongTerm = 50;

  if (days < 3) {
    return basePrice;
  }

  if (days < 7) {
    return basePrice - discountShortTerm;
  }

  return basePrice - discountLongTerm;
}

module.exports = calculateRentalCost;
