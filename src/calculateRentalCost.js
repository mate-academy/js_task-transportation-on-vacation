/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const moneyPerDay = 40;
  const longTerm = 7;
  const shortTerm = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  if (days >= longTerm) {
    return days * moneyPerDay - longTermDiscount;
  }

  if (days >= shortTerm) {
    return days * moneyPerDay - shortTermDiscount;
  }

  return days * moneyPerDay;
}

module.exports = calculateRentalCost;
