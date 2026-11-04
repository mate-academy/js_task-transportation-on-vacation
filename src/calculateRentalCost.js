/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  let result = days * 40;
  const longTerm = 50;
  const shortTerm = 20;

  if (days >= 7) {
    result -= longTerm;
  }

  if (days >= 3 && days <= 6) {
    result -= shortTerm;
  }

  return result;
}

module.exports = calculateRentalCost;
