/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const pricePerDay = 40;
  const longTerm = 7;
  const longTermDescount = 50;
  const shortTerm = 3;
  const shortTermDescount = 20;

  const basePrice = days * pricePerDay;

  if (days >= longTerm) {
    return basePrice - longTermDescount;
  }

  if (days >= shortTerm) {
    return basePrice - shortTermDescount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
