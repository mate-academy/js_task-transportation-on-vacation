/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPrice = 40;
  const threeDaysDiscount = 20;
  const weekDiscount = 50;
  const allDays = days * rentPrice;

  if (days >= 7) {
    return allDays - weekDiscount;
  }

  if (days >= 3) {
    return allDays - threeDaysDiscount;
  }

  return allDays;
}

module.exports = calculateRentalCost;
