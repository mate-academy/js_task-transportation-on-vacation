/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const sum = days * pricePerDay;
  const discountBig = 50;
  const discountSmall = 20;

  if (days >= 7) {
    return sum - discountBig;
  }

  if (days >= 3) {
    return sum - discountSmall;
  }

  return sum;
}

module.exports = calculateRentalCost;
