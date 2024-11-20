/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const discountSmall = 20;
  const discountBig = 50;

  if (days < 3) {
    return days * price;
  } else if (days >= 3 && days <= 6) {
    return days * price - discountSmall;
  } else if (days >= 7) {
    return days * price - discountBig;
  }
}

module.exports = calculateRentalCost;
