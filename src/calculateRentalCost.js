/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPayment = 40;
  const basicDiscount = 50;
  const minDiscount = 20;
  const totalCost = days * dayPayment;

  if (days < 3) {
    return totalCost;
  }

  if (days < 7) {
    return totalCost - minDiscount;
  }

  return totalCost - basicDiscount;
}

module.exports = calculateRentalCost;
