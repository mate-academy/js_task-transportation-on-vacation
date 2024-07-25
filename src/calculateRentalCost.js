/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDay = 40;
  const minDiscount = 20;
  const maxDiscount = 50;

  if (days < 3) {
    return days * oneDay;
  }

  if (days >= 3 && days <= 6) {
    return days * oneDay - minDiscount;
  }

  if (days >= 7) {
    return days * oneDay - maxDiscount;
  }
}

module.exports = calculateRentalCost;
