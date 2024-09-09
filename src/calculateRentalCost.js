/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalCost = days * 40;

  const discountLongRental = 50;

  const discountShortRental = 20;

  if (days >= 7) {
    const newTotalCost = totalCost - discountLongRental;

    return newTotalCost;
  }

  if (days >= 3) {
    const newTotalCost = totalCost - discountShortRental;

    return newTotalCost;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
