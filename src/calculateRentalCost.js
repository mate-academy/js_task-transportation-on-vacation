/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCarCost = 40;
  const sevenDaysDiscount = 50;
  const threeDaysDiscount = 20;
  const rentCosts = days * dayCarCost;

  if (days >= 7) {
    return rentCosts - sevenDaysDiscount;
  } else if (days >= 3) {
    return rentCosts - threeDaysDiscount;
  }

  return rentCosts;
}

module.exports = calculateRentalCost;
