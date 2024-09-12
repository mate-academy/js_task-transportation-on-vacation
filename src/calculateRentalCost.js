/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const discount = 20;
  const discountBig = 50;

  let totalCost = days * costPerDay;

  if (days >= 7) {
    return totalCost - discountBig;
  }

  if (days >= 3) {
    return totalCost - discount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
