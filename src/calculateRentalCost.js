/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const maxDiscount = 50;
  const minDiscount = 20;

  const total = days * dayCost;

  if (days >= 7) {
    return total - maxDiscount;
  } else if (days >= 3) {
    return total - minDiscount;
  } else {
    return total;
  }
}

module.exports = calculateRentalCost;
