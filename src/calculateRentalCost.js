/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const baseRentalCost = days * pricePerDay;
  const longTerm = 7;
  const mediumTerm = 3;
  const longTermDiscount = 50;
  const mediumTermDiscount = 20;

  if (days >= mediumTerm) {
    return days >= mediumTerm && days < longTerm
      ? baseRentalCost - mediumTermDiscount
      : baseRentalCost - longTermDiscount;
  }

  return baseRentalCost;
}

module.exports = calculateRentalCost;
