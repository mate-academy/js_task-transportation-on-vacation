/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTermRent = 7;
  const shortTermRent = 3;
  const dailyRentalCost = 40;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  if (days >= longTermRent) {
    return days * dailyRentalCost - longTermDiscount;
  }
  
 if (days >= shortTermRent) {
    return days * dailyRentalCost - shortTermDiscount;
  }
    return days * dailyRentalCost;
  
}

module.exports = calculateRentalCost;
