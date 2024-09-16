/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentPrice = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days < 3) {
    return days * rentPrice;
  }

  if (days >= 3 && days < 7) {
    return (days * rentPrice) - smallDiscount;
  }

  return (days * rentPrice) - bigDiscount;
}

module.exports = calculateRentalCost;
