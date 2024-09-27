/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRent = 40;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;
  const longTerm = 7;
  const shortTerm = 3;

  if (days >= longTerm) {
    return dailyRent * days - longTermDiscount;
  }

  if (days >= shortTerm) {
    return dailyRent * days - shortTermDiscount;
  }

  return dailyRent * days;
}

module.exports = calculateRentalCost;
