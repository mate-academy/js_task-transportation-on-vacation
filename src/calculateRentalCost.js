/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPerDay = 40;
  const longTerm = 7;
  const shortTerm = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  const defaultPrice = rentPerDay * days;

  if (days >= longTerm) {
    return defaultPrice - longTermDiscount;
  }

  if (days >= shortTerm) {
    return defaultPrice - shortTermDiscount;
  }

  return defaultPrice;
}

module.exports = calculateRentalCost;
