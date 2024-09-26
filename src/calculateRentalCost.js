/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discountSmall = 20;
  const discountBig = 50;
  const cost = 40;
  const costRent = cost * days;

  if (days < 3) {
    return costRent;
  }

  if (days < 7 && days >= 3) {
    return costRent - discountSmall;
  }

  if (days >= 7) {
    return costRent - discountBig;
  }
}

module.exports = calculateRentalCost;
