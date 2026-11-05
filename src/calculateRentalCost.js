/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTerm = 7;
  const longTermDiscount = 50;
  const mediumTerm = 3;
  const mediumTermDiscount = 20;
  const costPerDay = 40;

  if (days >= longTerm) {
    return costPerDay * days - longTermDiscount;
  }

  if (days >= mediumTerm) {
    return costPerDay * days - mediumTermDiscount;
  }

  return costPerDay * days;
}

module.exports = calculateRentalCost;
