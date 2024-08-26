/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  // return days < 3 ? days * 40 : days < 7 ? days * 40 - 20 : days * 40 - 50;

  const price = 40;
  const longTermDiscount = 50;
  const longTerm = 7;
  const shortTermDiscount = 20;
  const shortTerm = 3;
  const totalCost = days * price;

  if (days >= longTerm) {
    return totalCost - longTermDiscount;
  } else if (days >= shortTerm) {
    return totalCost - shortTermDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
