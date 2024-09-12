/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const bigDiscount = 50;
  const smallDiscount = 20;
  const cost = days * 40;

  switch (true) {
    case days >= 3 && days < 7:
      return cost - smallDiscount;
    case days >= 7:
      return cost - bigDiscount;
    default:
      return cost;
  }
}

module.exports = calculateRentalCost;
