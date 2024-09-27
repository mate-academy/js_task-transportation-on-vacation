/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const perDay = 40;
  const discountThree = 20;
  const discountSeven = 50;

  const cost = perDay * days;

  if (days >= 7) {
    return cost - discountSeven;
  }

  if (days >= 3) {
    return cost - discountThree;
  }

  return cost;
}

module.exports = calculateRentalCost;
