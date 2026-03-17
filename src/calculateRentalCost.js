/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const longTermDays = 7;
  const mediumTermDays = 3;

  const longTermDiscount = 50;
  const mediumTermDiscount = 20;

  const basePrice = days * pricePerDay;

  if (days >= longTermDays) {
    return basePrice - longTermDiscount;
  }

  if (days >= mediumTermDays) {
    return basePrice - mediumTermDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
