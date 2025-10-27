/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG = 7;
  const MID = 3;
  const price = 40;
  const DISCOUNT_3 = 20;
  const DISCOUNT_7 = 50;

  const totalCost = days * price;

  if (days >= LONG) {
    return totalCost - DISCOUNT_7;
  }

  if (days >= MID) {
    return totalCost - DISCOUNT_3;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
