/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const smallDiscount = 20;
  const bigDiscount = 50;
  const dailyRentCost = 40;

  if (days >= 7) {
    return days * dailyRentCost - bigDiscount;
  }

  if (days >= 3) {
    return days * dailyRentCost - smallDiscount;
  }

  return days * dailyRentCost;
}

module.exports = calculateRentalCost;
