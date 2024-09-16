/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyCost = 40;
  const rentalCost = days * dailyCost;
  const bigDiscount = 50;
  const smallDiscount = 20;

  if (days >= 7) {
    return rentalCost - bigDiscount;
  }

  if (days >= 3) {
    return rentalCost - smallDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
