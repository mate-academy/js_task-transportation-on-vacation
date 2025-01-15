/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const bigDiscount = 50;
  const smallDiscount = 20;
  const price = 40;
  const cost = days * price;
  let totalCost = 0;

  if (days >= 7) {
    totalCost = cost - bigDiscount;

    return totalCost;
  }

  if (days >= 3) {
    totalCost = cost - smallDiscount;

    return totalCost;
  }
  totalCost = cost;

  return totalCost;
}

module.exports = calculateRentalCost;
