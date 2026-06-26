/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const basicDiscount = 20;
  const extraDiscount = 50;

  const total = days * pricePerDay;

  if (days >= 7) {
    return total - extraDiscount;
  }

  if (days >= 3) {
    return total - basicDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
