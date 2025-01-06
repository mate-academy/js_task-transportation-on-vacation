/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  if (days >= 7) {
    return days * rentCost - longTermDiscount;
  }

  if (days >= 3) {
    return days * rentCost - shortTermDiscount;
  }

  return days * rentCost;
  // write code here
}

module.exports = calculateRentalCost;
