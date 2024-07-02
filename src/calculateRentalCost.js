const pricePerDay = 40;
const longPeriodDays = 7;
const longPeriodDiscount = 50;
const mediumPeriodDays = 3;
const mediumPeriodDiscount = 20;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseTotal = days * pricePerDay;

  if (days >= longPeriodDays) {
    return baseTotal - longPeriodDiscount;
  }

  if (days >= mediumPeriodDays) {
    return baseTotal - mediumPeriodDiscount;
  }

  return baseTotal;
}

module.exports = calculateRentalCost;
