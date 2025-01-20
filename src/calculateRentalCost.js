/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceOfRent = 40;
  let totalCost = days * priceOfRent;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days < 3) {
    return totalCost;
  }

  if (days >= 3 && days <= 6) {
    totalCost = totalCost - smallDiscount;

    return totalCost;
  }

  totalCost = totalCost - bigDiscount;

  return totalCost;
}

module.exports = calculateRentalCost;
