/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const regularPrice = days * PRICE_PER_DAY;
  const smallDisc = 20;
  const bigDisc = 50;

  if (days >= 7) {
    return regularPrice - bigDisc;
  }

  if (days >= 3 && days <= 6) {
    return regularPrice - smallDisc;
  }

  return regularPrice;
}

module.exports = calculateRentalCost;
