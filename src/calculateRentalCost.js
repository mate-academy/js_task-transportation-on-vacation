/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const result = days * dayCost;
  const shortTerm = 3;
  const shortTermDisc = 20;
  const longTerm = 7;
  const longTermDisc = 50;

  if (days >= longTerm) {
    return result - longTermDisc;
  }

  if (days >= shortTerm) {
    return result - shortTermDisc;
  }

  return result;
}

module.exports = calculateRentalCost;
