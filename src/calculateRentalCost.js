/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const priceADay = 40;
  const totalCost = priceADay * days;
  const bigDiscount = 50;
  const smallDiscount = 20;

  if (days >= 7) {
    return totalCost - bigDiscount;
  }

  if (days >= 3) {
    return totalCost - smallDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
