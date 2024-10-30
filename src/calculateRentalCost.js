/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;
  const prise = 40;

  if (days < shortTerm) {
    return days * prise;
  } else if (days < longTerm) {
    return days * prise - shortTermDiscount;
  }

  return days * prise - longTermDiscount;
}

module.exports = calculateRentalCost;
