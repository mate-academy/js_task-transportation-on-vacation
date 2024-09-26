/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days < 3) {
    return pricePerDay * days;
  }

  if (days < 7) {
    return pricePerDay * days - smallDiscount;
  }

  return pricePerDay * days - bigDiscount;
}

module.exports = calculateRentalCost;
