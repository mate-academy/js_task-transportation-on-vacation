/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const persDay = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  let total = days * persDay;

  if (days >= longTerm) {
    return (total -= longTermDiscount);
  }

  if (days >= shortTerm) {
    return (total -= shortTermDiscount);
  }

  return total;
}

module.exports = calculateRentalCost;
