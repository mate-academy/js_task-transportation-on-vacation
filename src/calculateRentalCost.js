/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costForDays = days * 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const mediumTerm = 3;
  const mediumTermDiscount = 20;

  if (days >= mediumTerm && days <= 6) {
    return costForDays - mediumTermDiscount;
  }

  if (days >= longTerm) {
    return costForDays - longTermDiscount;
  }

  return costForDays;
}

module.exports = calculateRentalCost;
