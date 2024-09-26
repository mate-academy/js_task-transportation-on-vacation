/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days >= 3 && days < 7) {
    return price * days - smallDiscount;
  }

  if (days >= 7) {
    return price * days - bigDiscount;
  }

  return price * days;
}

module.exports = calculateRentalCost;
