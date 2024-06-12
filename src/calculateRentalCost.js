/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costOfAllDays = days * 40;
  const minDiscount = 20;
  const maxDiscount = 50;

  if (days < 3) {
    return costOfAllDays;
  }

  if (days < 7) {
    return costOfAllDays - minDiscount;
  }

  return costOfAllDays - maxDiscount;
}

module.exports = calculateRentalCost;
