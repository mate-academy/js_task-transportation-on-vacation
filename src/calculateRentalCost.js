/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayCost = 40;
  const shortTerm = 3;
  const longTerm = 7;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days < shortTerm) {
    return days * oneDayCost;
  }

  if (days < longTerm) {
    return days * oneDayCost - shortTermDiscount;
  }

  return days * oneDayCost - longTermDiscount;
}

module.exports = calculateRentalCost;
