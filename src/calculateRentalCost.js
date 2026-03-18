/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = days * 40;
  const bigSale = 50;
  const sale = 20;
  const shortTerm = 3;
  const longTerm = 7;
  const cost = costPerDay;

  if (days >= longTerm) {
    return cost - bigSale;
  }

  if (days >= shortTerm) {
    return cost - sale;
  }

  return cost;
}

module.exports = calculateRentalCost;
