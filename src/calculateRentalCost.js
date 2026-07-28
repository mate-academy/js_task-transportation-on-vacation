/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const daysCost = 40;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days >= 7) {
    return days * daysCost - longTermDiscount;
  }

  if (days >= 3) {
    return days * daysCost - shortTermDiscount;
  }

  return days * daysCost;
}

module.exports = calculateRentalCost;
