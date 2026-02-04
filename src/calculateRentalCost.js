/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const totalCost = days * dailyRate;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  if (days >= 3 && days <= 6) {
    return totalCost - shortTermDiscount;
  } else if (days >= 7) {
    return totalCost - longTermDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
