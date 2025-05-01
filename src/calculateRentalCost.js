/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTerm = 7;
  const shortTerm = 3;
  const normalPrice = 40;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days < shortTerm) {
    return normalPrice * days;
  }

  if (days < longTerm) {
    return normalPrice * days - shortTermDiscount;
  }

  return normalPrice * days - longTermDiscount;
}

module.exports = calculateRentalCost;
