/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = days * 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days >= 7) {
    return rentalCost - bigDiscount;
  }

  if (days >= 3) {
    return rentalCost - smallDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
