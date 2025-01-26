/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseRentalCost = days * 40;
  const longTerm = 7;
  const mediumTerm = 3;
  const longTermDiscount = 50;
  const mediumTermDiscount = 20;

  if (days >= mediumTerm) {
    return days >= longTerm
      ? baseRentalCost - longTermDiscount
      : baseRentalCost - mediumTermDiscount;
  }

  return baseRentalCost;
}

module.exports = calculateRentalCost;
