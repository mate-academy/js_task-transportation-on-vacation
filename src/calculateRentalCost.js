/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const basicDiscount = 50;
  const secondDiscount = 20;

  if (days >= 7) {
    return days * price - basicDiscount;
  }

  if (days >= 3) {
    return days * price - secondDiscount;
  }

  return days * price;
}

module.exports = calculateRentalCost;
