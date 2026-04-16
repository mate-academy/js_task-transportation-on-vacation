/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRate = 40;
  const longTermDays = 7;
  const shortTermDays = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  let total = days * dailyRate;

  if (days >= longTermDays) {
    total -= longTermDiscount;
  } else if (days >= shortTermDays) {
    total -= shortTermDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
