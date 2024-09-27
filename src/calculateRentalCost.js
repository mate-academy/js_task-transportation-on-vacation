/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const pricePerDay = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;
  const totalCost = days * pricePerDay;

  if (days >= 7) {
    return totalCost - bigDiscount;
  }

  if (days >= 3) {
    return totalCost - smallDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
