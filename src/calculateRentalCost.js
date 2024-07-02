/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const periodDiscounts = { 3: 20, 7: 50 };

  const discount = getDiscount(days, periodDiscounts);

  return days * pricePerDay - discount;
}

/**
 * @param {number} days
 * @param {Object} periodDiscounts
 *
 * @return {number}
 */
function getDiscount(days, periodDiscounts) {
  const allPeriods = Object.getOwnPropertyNames(periodDiscounts);
  const viablePeriods = allPeriods.filter((value) => value <= days);
  const period = Math.max(...viablePeriods);

  return periodDiscounts[period] ?? 0;
}

module.exports = calculateRentalCost;
