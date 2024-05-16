/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const shortTerm = 3;
  const longTerm = 7;
  const shortTermDisc = 20;
  const longTermDisc = 50;
  const noDisc = price * days;

  if (days >= shortTerm && days < longTerm) {
    return noDisc - shortTermDisc;
  }

  if (days >= longTerm) {
    return noDisc - longTermDisc;
  }

  return noDisc;
}

module.exports = calculateRentalCost;
