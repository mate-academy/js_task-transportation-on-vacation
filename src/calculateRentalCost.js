/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const daysForDiscountTotal = 7;

  if (days <= 0) {
    return 0;
  }

  if (days >= daysForDiscountTotal) {
    return basePrice * days - 50;
  }

  if (days >= 3) {
    return basePrice * days - 20;
  }

  return basePrice * days;
}

module.exports = calculateRentalCost;
