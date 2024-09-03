/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRent = 40;
  const shortTerm = 3;
  const shorTermDiscount = 20;
  const longterm = 7;
  const LongTermDiscount = 50;
  const totalCost = days * dailyRent;

  if (days >= longterm) {
    return totalCost - LongTermDiscount;
  }

  if (days >= shortTerm) {
    return totalCost - shorTermDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
