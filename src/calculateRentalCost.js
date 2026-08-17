/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discountBig = 50;
  const discountSmall = 20;
  const totalDays = days * 40;

  if (days >= 7) {
    return totalDays - discountBig;
  } else if (days >= 3) {
    return totalDays - discountSmall;
  }

  return totalDays;
}

module.exports = calculateRentalCost;
