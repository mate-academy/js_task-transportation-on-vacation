/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const longTermDays = 7;
  const longTermDiscount = 50;
  const shortTermDays = 3;
  const shortTermDiscount = 20;
  let totalCost = days * dailyRate;

  if (days >= longTermDays) {
    totalCost = totalCost - longTermDiscount;
  } else if (days >= shortTermDays) {
    totalCost -= shortTermDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
