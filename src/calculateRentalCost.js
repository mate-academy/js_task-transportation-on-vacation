/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceForDay = 40;
  const bonusTermSmall = 3;
  const bonusTermBig = 7;
  const discountSmall = 20;
  const discountBig = 50;

  if (days >= bonusTermBig) {
    return days * priceForDay - discountBig;
  }

  if (days >= bonusTermSmall) {
    return days * priceForDay - discountSmall;
  }

  return days * priceForDay;
}

module.exports = calculateRentalCost;
