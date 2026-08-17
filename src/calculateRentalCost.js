/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrise = 40;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;

  if (days >= longTerm) {
    return days * basePrise - longTermDiscount;
  }

  if (days >= shortTerm) {
    return days * basePrise - shortTermDiscount;
  } else {
    return days * basePrise;
  }
}

module.exports = calculateRentalCost;
