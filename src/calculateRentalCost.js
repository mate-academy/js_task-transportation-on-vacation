/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPrice = 40;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const longTerm = 7;

  if (days < shortTerm) {
    return rentPrice * days;
  }

  if (days < longTerm) {
    return rentPrice * days - shortTermDiscount;
  }

  return rentPrice * days - longTermDiscount;
}

module.exports = calculateRentalCost;
