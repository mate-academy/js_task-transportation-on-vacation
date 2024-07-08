/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const mediumTerm = 3;
  const mediumTermDiscount = 20;

  if (days >= longTerm) {
    return dayRent * days - longTermDiscount;
  }

  if (days >= mediumTerm) {
    return dayRent * days - mediumTermDiscount;
  }

  return dayRent * days;
}

module.exports = calculateRentalCost;
