/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const discountSmall = 20;
  const discountBig = 50;

  const sum = days * costPerDay;

  if (days >= 7) {
    return sum - discountBig;
  }

  if (days >= 3) {
    return sum - discountSmall;
  }

  return sum;
}

module.exports = calculateRentalCost;
