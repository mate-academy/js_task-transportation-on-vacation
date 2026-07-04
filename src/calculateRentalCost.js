/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTerm = 7;
  const longTermDis = 50;
  const shortTerm = 3;
  const shortTermDis = 20;

  let totalCost = days * 40;

  if (days >= longTerm) {
    totalCost -= longTermDis;
  }

  if (days >= shortTerm && days < longTerm) {
    totalCost -= shortTermDis;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
