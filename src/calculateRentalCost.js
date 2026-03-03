/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const longTerm = 7;
  const mediumTerm = 3;
  const longTermDiscount = 50;
  const mediumTermDiscont = 20;

  if (days >= longTerm) {
    return dailyCost * days - longTermDiscount;
  }

  if (days >= mediumTerm) {
    return dailyCost * days - mediumTermDiscont;
  }

  return days * dailyCost;
}

module.exports = calculateRentalCost;
