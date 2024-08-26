/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const shortTerm = 2;
  const longTerm = 7;
  const price = 40;
  let sale = 0;

  if (days > shortTerm && days < longTerm) {
    sale = 20;
  }

  if (days >= longTerm) {
    sale = 50;
  }

  return days * price - sale;
}

module.exports = calculateRentalCost;
