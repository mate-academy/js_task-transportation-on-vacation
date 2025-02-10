/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;

  let rentAmount = days * dailyRate;

  if (days >= longTerm) {
    return (rentAmount -= longTermDiscount);
  }

  if (days >= shortTerm) {
    return (rentAmount -= shortTermDiscount);
  }

  return rentAmount;
}

module.exports = calculateRentalCost;
