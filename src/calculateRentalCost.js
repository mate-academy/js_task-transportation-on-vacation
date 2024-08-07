/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const totalCost = days * dailyRate;
  const smallDiscount = 20;
  const discount = 50;
  let cost = 0;

  if (days < 3) {
    return totalCost;
  }

  if (days < 7) {
    cost = totalCost - smallDiscount;

    return cost;
  }

  cost = totalCost - discount;

  return cost;
}

module.exports = calculateRentalCost;
