/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;

  const basicDiscount = 20;
  const basicDiscountDays = 3;

  const advancedDiscount = 50;
  const advancedDiscountDays = 7;

  const rentCost = dayCost * days;

  if (days >= advancedDiscountDays) {
    return rentCost - advancedDiscount;
  }

  if (days >= basicDiscountDays) {
    return rentCost - basicDiscount;
  }

  return rentCost;
}

module.exports = calculateRentalCost;
