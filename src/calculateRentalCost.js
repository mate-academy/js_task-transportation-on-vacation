/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;

  if (days >= longTerm) {
    return days * pricePerDay - longTermDiscount;
  } else if (days >= shortTerm) {
    return days * pricePerDay - shortTermDiscount;
  }

  return days * pricePerDay;
}

module.exports = calculateRentalCost;
