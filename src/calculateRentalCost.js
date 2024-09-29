/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rental = 40;
  const longTerm = 7;
  const shortTerm = 3;
  const totalPrise = days * rental;

  if (days < shortTerm) {
    return totalPrise;
  } else if (days >= shortTerm && days < longTerm) {
    return totalPrise - 20;
  }

  return totalPrise - 50;
}

module.exports = calculateRentalCost;
