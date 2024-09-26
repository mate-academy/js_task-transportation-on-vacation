/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  const rentalCost = dayRent * days;

  if (days < 3) {
    return rentalCost;
  } else if (days >= 7) {
    return rentalCost - bigDiscount;
  }
  return rentalCost - smallDiscount;
}

module.exports = calculateRentalCost;
