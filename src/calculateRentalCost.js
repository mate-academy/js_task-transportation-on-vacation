/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const daysCost = 40;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days === 2) {
    return days * daysCost;
  } else if (days >= 3 && days <= 6) {
    return days * daysCost - shortTermDiscount;
  } else if (days >= 7) {
    return days * daysCost - longTermDiscount;
  }

  return days * daysCost;
}

module.exports = calculateRentalCost;
