/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrix = days * 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;

  if (days >= longTerm) {
    return basePrix - longTermDiscount;
  }

  if (days >= shortTerm) {
    return basePrix - shortTermDiscount;
  }

  return basePrix;
}

module.exports = calculateRentalCost;
