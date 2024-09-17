/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPrice = 40;
  const discountS = 20;
  const discountM = 50;
  let total = rentPrice * days;

  if (days >= 7) {
    total -= discountM;
  }

  if (days >= 3 && days < 7) {
    total -= discountS;
  }

  return total;
}

module.exports = calculateRentalCost;
