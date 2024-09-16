/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const regularPrice = 40;
  const fixPrise = days * regularPrice;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days >= 3 && days < 7) {
    return fixPrise - smallDiscount;
  }

  if (days >= 7) {
    return fixPrise - bigDiscount;
  }

  return fixPrise;
}

module.exports = calculateRentalCost;
