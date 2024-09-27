/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basicDiscount = 20;
  const greatDiscount = 50;
  const rentalCost = 40;
  const total = rentalCost * days;

  if (days >= 7) {
    return total - greatDiscount;
  }

  if (days >= 3) {
    return total - basicDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
