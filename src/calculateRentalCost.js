/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const totalCost = days * pricePerDay;

  if (days >= 7) {
    return totalCost - bigDiscount;
  }

  if (days >= 3 && days <= 6) {
    return totalCost - smallDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
