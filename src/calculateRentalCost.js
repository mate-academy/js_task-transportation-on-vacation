/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const totalAmount = days * costPerDay;
  const basicDiscount = 20;
  const extendedDiscount = 50;

  if (days < 3) {
    return totalAmount;
  }

  if (days >= 3 && days < 7) {
    return totalAmount - basicDiscount;
  }

  return totalAmount - extendedDiscount;
}

module.exports = calculateRentalCost;
