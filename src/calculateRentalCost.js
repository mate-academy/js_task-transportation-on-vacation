/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceForDay = 40;
  const secondDiscount = 50;
  const firstDiscount = 20;

  const count = priceForDay * days;

  if (days >= 7) {
    return count - secondDiscount;
  }

  if (days >= 3) {
    return count - firstDiscount;
  }

  return count;
}

module.exports = calculateRentalCost;
